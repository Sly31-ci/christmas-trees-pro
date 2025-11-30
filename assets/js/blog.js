// ================================================
// BLOG.JS - Blog Modal Management
// ================================================

// Detailed Article Content
const blogArticles = {
    'choisir-sapin': {
        category: 'Tips',
        title: 'How to Choose the Perfect Christmas Tree?',
        date: '📅 Nov 10, 2024',
        time: '⏱️ 4 min',
        image: "data:image/svg+xml,%3Csvg width='400' height='250' xmlns='http://www.w3.org/2000/svg'%3E%3Crect fill='%23C41E3A' width='400' height='250'/%3E%3Ctext x='50%25' y='50%25' font-size='20' fill='white' text-anchor='middle' dominant-baseline='middle'%3EChoosing Your Tree%3C/text%3E%3C/svg%3E",
        content: `
            <h3>Introduction</h3>
            <p>Choosing the right Christmas tree is an important decision that will influence your entire holiday decoration. Whether you opt for a natural or artificial tree, several criteria should be considered.</p>
            
            <h3>Types of Natural Trees</h3>
            
            <h4>Nordmann Fir</h4>
            <p><strong>Most Popular:</strong> The Nordmann is appreciated for its soft needles that don't prick and its excellent retention. It hardly loses any needles and can last up to 8 weeks.</p>
            <ul>
                <li>Shiny dark green needles</li>
                <li>Sturdy branches ideal for heavy decorations</li>
                <li>Light resin scent</li>
                <li>Price: Medium to high</li>
            </ul>
            
            <h4>Spruce</h4>
            <p><strong>The Traditional Choice:</strong> Spruce offers the quintessential Christmas scent with its intense resin smell. It is the traditional tree par excellence.</p>
            <ul>
                <li>Intense and authentic fragrance</li>
                <li>Prickly needles</li>
                <li>Loses needles faster</li>
                <li>Price: Economical</li>
            </ul>
            
            <h3>Artificial Trees</h3>
            <p>Artificial trees have evolved greatly and now offer impressive realism. They are a durable and practical investment.</p>
            
            <h4>Advantages</h4>
            <ul>
                <li>Reusable for 10-15 years</li>
                <li>No maintenance required</li>
                <li>No falling needles</li>
                <li>Often pre-lit</li>
                <li>Variety of sizes and shapes</li>
            </ul>
            
            <h4>Disadvantages</h4>
            <ul>
                <li>No natural scent</li>
                <li>Environmental impact of production</li>
                <li>Higher initial cost</li>
            </ul>
            
            <h3>Selection Criteria</h3>
            
            <h4>Size</h4>
            <p>Measure your available space in height and width. Don't forget to leave room for the star or topper (about 20-30 cm extra).</p>
            
            <h4>Shape</h4>
            <ul>
                <li><strong>Dense Tree:</strong> Full branches, traditional look</li>
                <li><strong>Sparse Tree:</strong> Spaced branches, modern style</li>
                <li><strong>Slim Tree:</strong> Ideal for small spaces</li>
            </ul>
            
            <h4>Budget</h4>
            <p>Prices vary significantly depending on type, size, and quality. Expect between $20 and $80 for a natural tree, and between $50 and $500 for a quality artificial one.</p>
            
            <h3>Care Tips</h3>
            <p>For a natural tree:</p>
            <ul>
                <li>Cut 2-3 cm off the trunk before putting it in water</li>
                <li>Keep the stand filled with water at all times</li>
                <li>Place it away from heat sources</li>
                <li>Mist the branches every 2-3 days</li>
            </ul>
            
            <h3>Conclusion</h3>
            <p>The perfect tree choice depends on your priorities: authenticity and scent for natural, practicality and durability for artificial. At Christmas Tree Pros, we guide you in your choice and offer a wide selection of quality trees.</p>
        `
    },
    'diy-decorations': {
        category: 'DIY',
        title: '5 Easy DIY Decorations',
        date: '📅 Nov 5, 2024',
        time: '⏱️ 6 min',
        image: "data:image/svg+xml,%3Csvg width='400' height='250' xmlns='http://www.w3.org/2000/svg'%3E%3Crect fill='%23D4AF37' width='400' height='250'/%3E%3Ctext x='50%25' y='50%25' font-size='20' fill='white' text-anchor='middle' dominant-baseline='middle'%3EDIY Decorations%3C/text%3E%3C/svg%3E",
        content: `
            <h3>Introduction</h3>
            <p>Creating your own Christmas decorations is a rewarding activity that allows you to personalize your home while spending quality time with family. Here are 5 easy and budget-friendly DIY ideas.</p>
            
            <h3>1. Natural Door Wreath</h3>
            <h4>Materials Needed</h4>
            <ul>
                <li>Metal or wicker ring (30-40 cm)</li>
                <li>Fir or eucalyptus branches</li>
                <li>Thin wire</li>
                <li>Decorative ribbon</li>
                <li>Pine cones, berries, dried oranges</li>
            </ul>
            
            <h4>Instructions</h4>
            <p>Attach the branches to the ring with wire, layering them to create volume. Then add decorative elements and finish with a nice ribbon bow. Time: 30 minutes.</p>
            
            <h3>2. Personalized Ornaments</h3>
            <h4>Materials Needed</h4>
            <ul>
                <li>Clear plastic baubles</li>
                <li>Acrylic paint or glitter</li>
                <li>Small decorative items (feathers, confetti)</li>
                <li>Glue</li>
            </ul>
            
            <h4>Instructions</h4>
            <p>Open the baubles and fill them with glitter, paint, or small items. You can also paint the outside with custom designs. Let dry and hang with a pretty ribbon.</p>
            
            <h3>3. Luminous Centerpiece</h3>
            <h4>Materials Needed</h4>
            <ul>
                <li>Tray or wooden board</li>
                <li>LED candles</li>
                <li>Fir branches</li>
                <li>Gold pine cones</li>
                <li>Small ornaments</li>
            </ul>
            
            <h4>Instructions</h4>
            <p>Arrange the elements harmoniously on the tray, creating different levels. Add LED candles for a warm and safe effect. Perfect for the holiday table!</p>
            
            <h3>4. Paper Garland</h3>
            <h4>Materials Needed</h4>
            <ul>
                <li>Colored cardstock</li>
                <li>Scissors or decorative punch</li>
                <li>String or ribbon</li>
                <li>Glue</li>
            </ul>
            
            <h4>Instructions</h4>
            <p>Cut shapes (stars, trees, snowflakes) from the paper. Fold them slightly to give dimension and thread them onto the string. A perfect activity to do with kids!</p>
            
            <h3>5. Snowy Candle Holders</h3>
            <h4>Materials Needed</h4>
            <ul>
                <li>Glass jars (jam jar type)</li>
                <li>White glue</li>
                <li>Epsom salt or sugar</li>
                <li>Tea lights</li>
                <li>Decorative ribbon</li>
            </ul>
            
            <h4>Instructions</h4>
            <p>Brush the outside of the jar with glue, then roll it in salt to create a snow effect. Let dry, add a ribbon, and place a candle inside. Magical!</p>
            
            <h3>Practical Tips</h3>
            <ul>
                <li>Prepare a protected workspace</li>
                <li>Involve the whole family in creations</li>
                <li>Collect natural materials during your walks</li>
                <li>Save your creations from year to year</li>
            </ul>
            
            <h3>Conclusion</h3>
            <p>These DIY decorations add a personal and warm touch to your Christmas decor. Feel free to contact us for more ideas and personalized advice!</p>
        `
    },
    'eclairage-exterieur': {
        category: 'Guide',
        title: 'Outdoor Christmas Lighting Guide',
        date: '📅 Nov 1, 2024',
        time: '⏱️ 7 min',
        image: "data:image/svg+xml,%3Csvg width='400' height='250' xmlns='http://www.w3.org/2000/svg'%3E%3Crect fill='%232D5016' width='400' height='250'/%3E%3Ctext x='50%25' y='50%25' font-size='18' fill='%23D4AF37' text-anchor='middle' dominant-baseline='middle'%3EOutdoor Lighting%3C/text%3E%3C/svg%3E",
        content: `
            <h3>Introduction</h3>
            <p>Outdoor lighting transforms your home into a true Christmas wonderland. Discover how to create a safe, aesthetic, and economical installation.</p>
            
            <h3>Types of Light Strings</h3>
            
            <h4>LED Strings</h4>
            <p><strong>Recommended Choice:</strong> LEDs consume 80% less energy than traditional bulbs and last up to 10 times longer.</p>
            <ul>
                <li>Very low consumption</li>
                <li>Exceptional lifespan (50,000 hours)</li>
                <li>Low heat emission</li>
                <li>Shock resistant</li>
                <li>Available in warm white, cool white, or multicolor</li>
            </ul>
            
            <h4>Solar Strings</h4>
            <p>Perfect for areas without power outlets. They charge during the day and light up automatically at nightfall.</p>
            
            <h4>LED Projectors</h4>
            <p>Ideal for illuminating facades, trees, or creating special effects (snowflakes, stars).</p>
            
            <h3>Installation Planning</h3>
            
            <h4>Measure and Calculate</h4>
            <ul>
                <li>Measure areas to decorate (roof, windows, trees)</li>
                <li>Add 10-15% margin for connections</li>
                <li>Check maximum chaining length (usually 3-5 strings)</li>
                <li>Calculate total power needed</li>
            </ul>
            
            <h4>Choosing Colors</h4>
            <ul>
                <li><strong>Warm White:</strong> Elegant and traditional</li>
                <li><strong>Cool White:</strong> Modern and bright</li>
                <li><strong>Multicolor:</strong> Festive and joyful</li>
                <li><strong>Single Color:</strong> Sober and refined</li>
            </ul>
            
            <h3>Safe Installation</h3>
            
            <h4>Essential Safety Rules</h4>
            <ul>
                <li>Use only outdoor-certified lights (IP44 minimum)</li>
                <li>Check cable condition before installation</li>
                <li>Do not overload outlets (max 1500W per outlet)</li>
                <li>Use a GFCI outlet</li>
                <li>Install in dry weather</li>
                <li>Unplug during storms</li>
            </ul>
            
            <h4>Fixing Techniques</h4>
            <ul>
                <li><strong>Adhesive Hooks:</strong> For smooth surfaces, no drilling</li>
                <li><strong>Gutter Clips:</strong> Easy and discreet attachment</li>
                <li><strong>Ground Stakes:</strong> For gardens and pathways</li>
                <li><strong>Cable Ties:</strong> To attach to trees without damaging them</li>
            </ul>
            
            <h3>Decoration Ideas</h3>
            
            <h4>The Facade</h4>
            <p>Outline your home with lights along the roofline and around windows. Create a focal point with a lighted motif on the front door.</p>
            
            <h4>Trees</h4>
            <p>Wrap lights in a spiral around the trunk and main branches. For a spectacular effect, use net lights.</p>
            
            <h4>The Pathway</h4>
            <p>Mark the path with solar lanterns or lighted stakes. Create a lighted arch at the entrance.</p>
            
            <h3>Consumption and Savings</h3>
            
            <h4>Consumption Calculation</h4>
            <p>A 10m LED string consumes about 5W, or 0.005 kWh. For 6 hours of daily use over 30 days:</p>
            <ul>
                <li>Consumption: 0.9 kWh</li>
                <li>Cost: negligible</li>
            </ul>
            
            <h4>Tips to Save</h4>
            <ul>
                <li>Use a timer to turn on/off automatically</li>
                <li>Prioritize LEDs</li>
                <li>Limit lighting hours (e.g., 6pm-11pm)</li>
                <li>Opt for solar lights where possible</li>
            </ul>
            
            <h3>Maintenance and Storage</h3>
            <ul>
                <li>Dismantle in dry weather</li>
                <li>Clean gently with a damp cloth</li>
                <li>Wrap carefully around a holder</li>
                <li>Store in a dry, temperate place</li>
                <li>Label boxes for easier installation next year</li>
            </ul>
            
            <h3>Conclusion</h3>
            <p>Successful outdoor lighting combines aesthetics, safety, and energy savings. Our team can assist you in designing and installing your light decoration.</p>
        `
    },
    'noel-eco': {
        category: 'Ecology',
        title: 'An Eco-Friendly Christmas',
        date: '📅 Oct 28, 2024',
        time: '⏱️ 5 min',
        image: "data:image/svg+xml,%3Csvg width='400' height='250' xmlns='http://www.w3.org/2000/svg'%3E%3Crect fill='%23C41E3A' width='400' height='250'/%3E%3Ctext x='50%25' y='50%25' font-size='20' fill='white' text-anchor='middle' dominant-baseline='middle'%3EEco-Friendly Christmas%3C/text%3E%3C/svg%3E",
        content: `
            <h3>Introduction</h3>
            <p>Celebrating Christmas while respecting the environment is possible! Discover our tips for magical and responsible holidays.</p>
            
            <h3>Choosing the Tree</h3>
            
            <h4>Local Natural Tree</h4>
            <p><strong>The Most Eco-Friendly Option:</strong> A locally grown natural tree has a much better carbon footprint than an artificial one.</p>
            <ul>
                <li>Choose local producers (short circuit)</li>
                <li>Choose a potted tree to replant it</li>
                <li>Recycle your tree after the holidays (compost, mulch)</li>
                <li>Some trees can be rented and then replanted</li>
            </ul>
            
            <h4>Durable Artificial Tree</h4>
            <p>If you opt for artificial, keep it for at least 10 years to offset its environmental impact.</p>
            
            <h3>Sustainable Decorations</h3>
            
            <h4>Natural Materials</h4>
            <ul>
                <li>Pine cones gathered in the forest</li>
                <li>Fir or holly branches</li>
                <li>Dried oranges</li>
                <li>Cinnamon sticks</li>
                <li>Gold-painted walnuts and hazelnuts</li>
            </ul>
            
            <h4>Homemade Decorations</h4>
            <p>Create your decorations with recycled materials: paper, cardboard, fabric. It's eco-friendly and creative!</p>
            
            <h4>Responsible Purchases</h4>
            <ul>
                <li>Prioritize quality over quantity</li>
                <li>Choose durable and timeless decorations</li>
                <li>Buy second-hand or swap with loved ones</li>
                <li>Avoid plastic glitter</li>
            </ul>
            
            <h3>Energy-Efficient Lighting</h3>
            
            <h4>Low Consumption LEDs</h4>
            <p>LED strings consume up to 80% less energy than traditional bulbs.</p>
            
            <h4>Smart Scheduling</h4>
            <ul>
                <li>Use a timer</li>
                <li>Limit lighting hours (6pm-11pm)</li>
                <li>Turn off when you are not there</li>
            </ul>
            
            <h4>Solar Alternatives</h4>
            <p>For outdoors, opt for solar strings that consume no electricity.</p>
            
            <h3>Eco-Friendly Gift Wrapping</h3>
            
            <h4>Alternatives to Wrapping Paper</h4>
            <ul>
                <li><strong>Furoshiki:</strong> Japanese technique of wrapping in reusable fabric</li>
                <li><strong>Kraft Paper:</strong> Recyclable and recycled, customizable</li>
                <li><strong>Newspapers:</strong> Creative and free</li>
                <li><strong>Reusable Boxes:</strong> Pretty and durable</li>
            </ul>
            
            <h4>Natural Decorations</h4>
            <p>Replace synthetic ribbons with twine, fir branches, or natural raffia.</p>
            
            <h3>Responsible Holiday Table</h3>
            
            <h4>Reusable Tableware</h4>
            <p>Avoid disposables! Use your nice dishes or rent some if necessary.</p>
            
            <h4>Local and Seasonal Menu</h4>
            <ul>
                <li>Prioritize local products</li>
                <li>Choose seasonal fruits and vegetables</li>
                <li>Reduce meat in favor of vegetarian dishes</li>
                <li>Avoid food waste</li>
            </ul>
            
            <h4>Edible Decorations</h4>
            <p>Use fruits, nuts, and herbs to decorate your table. Zero waste!</p>
            
            <h3>Waste Management</h3>
            
            <h4>Sorting</h4>
            <ul>
                <li>Provide multiple sorting bins</li>
                <li>Recycle non-plasticized wrapping paper</li>
                <li>Compost organic waste</li>
            </ul>
            
            <h4>Tree Recycling</h4>
            <p>Check with your municipality for collection points. Trees are often turned into compost or mulch.</p>
            
            <h3>Responsible Gifts</h3>
            <ul>
                <li>Offer experiences rather than objects</li>
                <li>Prioritize durable and quality gifts</li>
                <li>Support local artisans</li>
                <li>Opt for intangible gifts (classes, subscriptions)</li>
            </ul>
            
            <h3>Conclusion</h3>
            <p>An eco-friendly Christmas is no less magical, quite the opposite! These small gestures help preserve our planet for future generations. Contact us to discover our range of eco-friendly decorations.</p>
        `
    },
    'table-fete': {
        category: 'Inspiration',
        title: 'Setting an Elegant Christmas Table',
        date: '📅 Oct 22, 2024',
        time: '⏱️ 4 min',
        image: "data:image/svg+xml,%3Csvg width='400' height='250' xmlns='http://www.w3.org/2000/svg'%3E%3Crect fill='%23D4AF37' width='400' height='250'/%3E%3Ctext x='50%25' y='50%25' font-size='20' fill='%231a1a1a' text-anchor='middle' dominant-baseline='middle'%3EHoliday Table%3C/text%3E%3C/svg%3E",
        content: `
            <h3>Introduction</h3>
            <p>The Christmas table is the heart of the celebration. Discover how to create an elegant table decoration that will impress your guests.</p>
            
            <h3>Choosing a Theme</h3>
            
            <h4>Traditional Red and Gold</h4>
            <p>The timeless classic that immediately evokes Christmas. Combine red tablecloths, gold napkins, and sparkling decorations.</p>
            
            <h4>Elegant White and Silver</h4>
            <p>For a refined and wintry atmosphere. Perfect for a sophisticated dinner.</p>
            
            <h4>Natural and Rustic</h4>
            <p>Green, brown, and beige tones with natural elements (wood, pine cones, branches). Warm and authentic.</p>
            
            <h4>Modern and Minimalist</h4>
            <p>Clean palette with touches of color. Simple and elegant lines.</p>
            
            <h3>The Base: Tablecloth and Runner</h3>
            
            <h4>Choosing the Tablecloth</h4>
            <ul>
                <li><strong>Linen or Cotton:</strong> Elegant and natural</li>
                <li><strong>Solid Color:</strong> Creates a neutral base for decorations</li>
                <li><strong>Discreet Patterns:</strong> Subtle snowflakes, stars</li>
            </ul>
            
            <h4>Table Runner</h4>
            <p>Add a contrasting table runner to structure the space. You can also use fir or eucalyptus branches.</p>
            
            <h3>Dishes and Cutlery</h3>
            
            <h4>Plates</h4>
            <p>Layer different sizes to create depth:</p>
            <ul>
                <li>Charger plate (large)</li>
                <li>Dinner plate</li>
                <li>Dessert plate or soup bowl</li>
            </ul>
            
            <h4>Glasses</h4>
            <p>Provide at least:</p>
            <ul>
                <li>Water glass</li>
                <li>Red wine glass</li>
                <li>White wine glass or champagne flute</li>
            </ul>
            
            <h4>Cutlery</h4>
            <p>Arrange them in order of use, from outside to inside. Add a festive touch with a gold ribbon.</p>
            
            <h3>Spectacular Centerpiece</h3>
            
            <h4>Floral Arrangement</h4>
            <ul>
                <li>White or red roses</li>
                <li>Fir branches</li>
                <li>Eucalyptus</li>
                <li>Red berries</li>
                <li>Gold pine cones</li>
            </ul>
            
            <h4>Candles</h4>
            <p><strong>Essential Element:</strong> Candles create a warm and romantic atmosphere.</p>
            <ul>
                <li>Vary heights</li>
                <li>Use elegant candle holders</li>
                <li>Prioritize LED candles for safety</li>
                <li>Arrange them in odd numbers</li>
            </ul>
            
            <h4>Decorative Elements</h4>
            <ul>
                <li>Christmas baubles arranged harmoniously</li>
                <li>Small figurines (reindeer, angels)</li>
                <li>Sparkling stars</li>
                <li>Dried oranges</li>
            </ul>
            
            <h3>Personalized Place Cards</h3>
            
            <h4>Creative Ideas</h4>
            <ul>
                <li><strong>Pine Cones:</strong> Slip a card with the name</li>
                <li><strong>Mini Frames:</strong> Elegant and reusable</li>
                <li><strong>Personalized Baubles:</strong> Each guest leaves with one</li>
                <li><strong>Decorated Cookies:</strong> Tasty and original</li>
            </ul>
            
            <h3>Napkin Folding</h3>
            
            <h4>Elegant Techniques</h4>
            <ul>
                <li><strong>Tree:</strong> Classic and festive</li>
                <li><strong>Fan:</strong> Simple and elegant</li>
                <li><strong>Pouch:</strong> To slip cutlery in</li>
                <li><strong>Bow:</strong> With a nice ribbon</li>
            </ul>
            
            <h3>Ambient Lighting</h3>
            
            <h4>Light Sources</h4>
            <ul>
                <li>Candles on the table</li>
                <li>Discreet string lights</li>
                <li>Dimmer to adjust intensity</li>
                <li>General soft lighting</li>
            </ul>
            
            <h3>Final Touches</h3>
            
            <h4>Small Details</h4>
            <ul>
                <li>Calligraphed menu at each place</li>
                <li>Small gifts for guests</li>
                <li>Christmas music playlist in the background</li>
                <li>Ambient scent (cinnamon, orange)</li>
            </ul>
            
            <h4>Practical Tips</h4>
            <ul>
                <li>Set the table the day before</li>
                <li>Check that decorations don't hinder conversation</li>
                <li>Leave space for dishes</li>
                <li>Provide a side table for service</li>
            </ul>
            
            <h3>Conclusion</h3>
            <p>A beautiful Christmas table combines aesthetics and functionality. The essential is to create a warm atmosphere where your guests feel welcome. Need help with your decoration? Contact us!</p>
        `
    },
    'tendances-2024': {
        category: 'Trends',
        title: 'Christmas Decor Trends 2024',
        date: '📅 Oct 15, 2024',
        time: '⏱️ 5 min',
        image: "data:image/svg+xml,%3Csvg width='400' height='250' xmlns='http://www.w3.org/2000/svg'%3E%3Crect fill='%232D5016' width='400' height='250'/%3E%3Ctext x='50%25' y='50%25' font-size='18' fill='white' text-anchor='middle' dominant-baseline='middle'%3ETrends 2024%3C/text%3E%3C/svg%3E",
        content: `
            <h3>Introduction</h3>
            <p>Christmas 2024 promises to be rich in decorative trends! Between back to basics and innovations, discover the styles that will mark this year.</p>
            
            <h3>1. The Great Return of Natural</h3>
            
            <h4>Raw Materials</h4>
            <p><strong>The Key Trend:</strong> Wood, wicker, linen, and wool invite themselves into our decorations for an authentic and warm atmosphere.</p>
            <ul>
                <li>Carved wood ornaments</li>
                <li>Natural branch wreaths</li>
                <li>Felt decorations</li>
                <li>Wicker baskets</li>
            </ul>
            
            <h4>Earthy Color Palette</h4>
            <ul>
                <li>Deep fir green</li>
                <li>Beige and ecru</li>
                <li>Chocolate brown</li>
                <li>Touches of rust</li>
            </ul>
            
            <h3>2. Scandinavian Minimalism</h3>
            
            <h4>Less is More</h4>
            <p>The Nordic approach favors simplicity and elegance with clean and functional decorations.</p>
            
            <h4>Characteristics</h4>
            <ul>
                <li>White, gray, and light wood palette</li>
                <li>Simple geometric shapes</li>
                <li>Paper or wood stars</li>
                <li>Abundance of white candles</li>
                <li>Cozy textiles (throws, cushions)</li>
            </ul>
            
            <h3>3. Festive Maximalism</h3>
            
            <h4>Assumed Opulence</h4>
            <p>Opposite to minimalism, this trend celebrates abundance and joy with generous decorations.</p>
            
            <h4>How to Adopt It</h4>
            <ul>
                <li>Layering textures and patterns</li>
                <li>Bright and contrasting colors</li>
                <li>Accumulation of decorations</li>
                <li>XXL garlands</li>
                <li>Overloaded tree (assumed!)</li>
            </ul>
            
            <h3>4. Trending Colors 2024</h3>
            
            <h4>Emerald Green</h4>
            <p>Rich and luxurious, emerald green brings depth and sophistication.</p>
            
            <h4>Glacier Blue</h4>
            <p>For a fresh and modern wintry atmosphere, associated with silver and white.</p>
            
            <h4>Terracotta and Rust</h4>
            <p>Warm tones that bring originality and softness, perfect with fir green.</p>
            
            <h4>Powder Pink</h4>
            <p>Romantic and soft, it softens traditional decorations.</p>
            
            <h3>5. Innovative Lighting</h3>
            
            <h4>Smart Strings</h4>
            <ul>
                <li>Control via smartphone</li>
                <li>Color changing</li>
                <li>Custom scheduling</li>
                <li>Synchronization with music</li>
            </ul>
            
            <h4>Christmas Neons</h4>
            <p>Neon-style light signs make their entry into Christmas decor for a modern and quirky style.</p>
            
            <h3>6. Artisanal Decorations</h3>
            
            <h4>Handmade Valued</h4>
            <p>Artisanal and DIY creations are more appreciated than ever for their authenticity.</p>
            <ul>
                <li>Artisanal ceramics</li>
                <li>Knitting and crochet</li>
                <li>Macrame</li>
                <li>Painting on wood</li>
            </ul>
            
            <h3>7. Enchanted Forest Theme</h3>
            
            <h4>Key Elements</h4>
            <ul>
                <li>Forest animals (deer, foxes, owls)</li>
                <li>Decorative mushrooms</li>
                <li>Moss and lichen</li>
                <li>Branches and pine cones</li>
                <li>Green and brown tones</li>
            </ul>
            
            <h3>8. Vintage and Retro</h3>
            
            <h4>Nostalgia for the 60s-70s</h4>
            <p>Vintage is making a big comeback with ornaments inspired by past decades.</p>
            <ul>
                <li>Blown glass baubles</li>
                <li>Garlands with large colored bulbs</li>
                <li>Silver tinsel</li>
                <li>Retro figurines</li>
            </ul>
            
            <h3>9. Eco-Responsibility</h3>
            
            <h4>Sustainable Decor</h4>
            <p>Ecological conscience strongly influences decorative choices.</p>
            <ul>
                <li>Recycled or upcycled decorations</li>
                <li>Biodegradable materials</li>
                <li>Low consumption LEDs</li>
                <li>Potted trees to replant</li>
                <li>Durable and timeless decorations</li>
            </ul>
            
            <h3>10. Mix and Match</h3>
            
            <h4>The Art of Mixing</h4>
            <p>Dare to mix styles to create a unique and personal decoration!</p>
            <ul>
                <li>Traditional + Modern</li>
                <li>Rustic + Glamorous</li>
                <li>Vintage + Minimalist</li>
            </ul>
            
            <h3>Tips for Adopting Trends</h3>
            
            <h4>Stay True to Your Style</h4>
            <p>Don't follow every trend. Choose those that speak to you and match your interior.</p>
            
            <h4>Invest Smartly</h4>
            <ul>
                <li>Prioritize quality for centerpieces</li>
                <li>Complete with DIY for small items</li>
                <li>Choose timeless basics</li>
            </ul>
            
            <h4>Test Before Investing</h4>
            <p>Start with a few touches of the new trend before changing everything.</p>
            
            <h3>Conclusion</h3>
            <p>The 2024 trends offer a beautiful diversity for all tastes! Whether you prefer natural, minimalist, or maximalist, the essential is to create an atmosphere that resembles you. Our team can advise you on integrating these trends into your decoration.</p>
        `
    }
};

// Mapping articles to IDs
const articleIds = [
    'choisir-sapin',
    'diy-decorations',
    'eclairage-exterieur',
    'noel-eco',
    'table-fete',
    'tendances-2024'
];

// Initialization
document.addEventListener('DOMContentLoaded', function () {
    const modal = document.getElementById('blogModal');
    const closeBtn = document.getElementById('blogModalClose');
    const readMoreLinks = document.querySelectorAll('.blog-read-more');
    const whatsappBtn = document.getElementById('blogWhatsappBtn');

    // Open modal on "Read more" click
    readMoreLinks.forEach((link, index) => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const articleId = articleIds[index];
            openBlogModal(articleId);
        });
    });

    // Close modal
    closeBtn.addEventListener('click', closeBlogModal);

    // Close by clicking outside content
    modal.addEventListener('click', function (e) {
        if (e.target === modal) {
            closeBlogModal();
        }
    });

    // Close with Escape key
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeBlogModal();
        }
    });

    // WhatsApp Button
    whatsappBtn.addEventListener('click', function () {
        const phoneNumber = '17038562590'; // Christmas Tree Pros WhatsApp Number
        const message = encodeURIComponent('Hello, I would like to know more about your Christmas decoration services.');
        window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
    });
});

// Function to open modal
function openBlogModal(articleId) {
    const article = blogArticles[articleId];
    if (!article) return;

    const modal = document.getElementById('blogModal');
    const modalCategory = document.getElementById('modalCategory');
    const modalTitle = document.getElementById('modalBlogTitle');
    const modalMeta = document.getElementById('modalBlogMeta');
    const modalImage = document.getElementById('modalBlogImage');
    const modalContent = document.getElementById('modalBlogContent');

    // Fill content - 🔒 SECURITY: Sanitize all content
    modalCategory.textContent = article.category;
    modalTitle.textContent = article.title;

    // Insert meta HTML (trusted content from blogArticles)
    const metaHTML = `
        <span class="blog-meta-item">${article.date}</span>
        <span class="blog-meta-item">${article.time}</span>
    `;
    if (modalMeta) {
        modalMeta.innerHTML = metaHTML;
    }

    modalImage.src = article.image;
    modalImage.alt = article.title;

    // Insert article content (trusted content from blogArticles)
    // Since this is hardcoded content in blogArticles, we can safely insert it
    if (modalContent) {
        modalContent.innerHTML = article.content;
    }

    // Show modal
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';

    // Scroll to top of modal
    const modalContentEl = document.querySelector('.blog-modal-content');
    if (modalContentEl) {
        modalContentEl.scrollTop = 0;
    }
}

// Function to close modal
function closeBlogModal() {
    const modal = document.getElementById('blogModal');
    modal.classList.remove('active');
    document.body.style.overflow = '';
}
