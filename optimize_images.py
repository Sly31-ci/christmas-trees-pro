#!/usr/bin/env python3
"""
Script d'optimisation des images lourdes pour ChristmasTreesPro
Réduit la taille des images tout en conservant une qualité visuelle excellente
"""

from PIL import Image
import os

# Configuration
IMAGES_TO_OPTIMIZE = [
    "assets/images/gallery/Ambiance Table de Fête noeil  Luxe.jpg",
    "assets/images/gallery/village-1.jpg",
    "assets/images/gallery/pack-complet-1.jpg"
]

MAX_DIMENSION = 1920  # Largeur/hauteur max
QUALITY = 85  # Qualité JPEG (85 = excellent compromis)

def optimize_image(image_path):
    """Optimise une image en réduisant sa taille"""
    if not os.path.exists(image_path):
        print(f"❌ Image non trouvée: {image_path}")
        return False
    
    # Taille originale
    original_size = os.path.getsize(image_path) / (1024 * 1024)  # MB
    print(f"\n📸 Traitement: {os.path.basename(image_path)}")
    print(f"   Taille originale: {original_size:.2f} MB")
    
    try:
        # Ouvrir l'image
        img = Image.open(image_path)
        
        # Dimensions originales
        width, height = img.size
        print(f"   Dimensions: {width}x{height}px")
        
        # Calculer nouvelles dimensions (conserver ratio)
        if width > MAX_DIMENSION or height > MAX_DIMENSION:
            if width > height:
                new_width = MAX_DIMENSION
                new_height = int(height * (MAX_DIMENSION / width))
            else:
                new_height = MAX_DIMENSION
                new_width = int(width * (MAX_DIMENSION / height))
            
            print(f"   Redimensionnement: {new_width}x{new_height}px")
            img = img.resize((new_width, new_height), Image.Resampling.LANCZOS)
        
        # Convertir en RGB si nécessaire (pour JPEG)
        if img.mode in ('RGBA', 'P'):
            img = img.convert('RGB')
        
        # Sauvegarder avec optimisation
        # Créer backup de l'original
        backup_path = image_path.replace('.jpg', '_original.jpg')
        if not os.path.exists(backup_path):
            os.rename(image_path, backup_path)
            print(f"   ✅ Backup créé: {os.path.basename(backup_path)}")
        
        # Sauvegarder version optimisée
        img.save(image_path, 'JPEG', quality=QUALITY, optimize=True)
        
        # Nouvelle taille
        new_size = os.path.getsize(image_path) / (1024 * 1024)  # MB
        reduction = ((original_size - new_size) / original_size) * 100
        
        print(f"   ✅ Optimisée: {new_size:.2f} MB")
        print(f"   💾 Réduction: {reduction:.1f}%")
        
        return True
        
    except Exception as e:
        print(f"   ❌ Erreur: {e}")
        return False

def main():
    print("🎄 Optimisation des images ChristmasTreesPro")
    print("=" * 60)
    
    success_count = 0
    total_original = 0
    total_optimized = 0
    
    for image_path in IMAGES_TO_OPTIMIZE:
        if os.path.exists(image_path):
            original_size = os.path.getsize(image_path) / (1024 * 1024)
            total_original += original_size
            
            if optimize_image(image_path):
                success_count += 1
                new_size = os.path.getsize(image_path) / (1024 * 1024)
                total_optimized += new_size
        else:
            # Vérifier si backup existe (déjà optimisé)
            backup_path = image_path.replace('.jpg', '_original.jpg')
            if os.path.exists(backup_path):
                print(f"\n✅ {os.path.basename(image_path)} - Déjà optimisée")
                success_count += 1
            else:
                print(f"\n❌ {os.path.basename(image_path)} - Non trouvée")
    
    print("\n" + "=" * 60)
    print(f"✅ Images optimisées: {success_count}/{len(IMAGES_TO_OPTIMIZE)}")
    
    if total_original > 0:
        total_reduction = ((total_original - total_optimized) / total_original) * 100
        print(f"📊 Taille totale avant: {total_original:.2f} MB")
        print(f"📊 Taille totale après: {total_optimized:.2f} MB")
        print(f"💾 Réduction totale: {total_reduction:.1f}%")
    
    print("\n🎉 Optimisation terminée!")

if __name__ == "__main__":
    main()
