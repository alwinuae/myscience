// CBSE Class 8 Physics — Complete Question Bank
// Loaded as a plain script via <script> tag

const questions = [

  // ============================================================
  // CHAPTER: Force and Pressure
  // ============================================================

  // -- definitions --
  {
    chapter: "Force and Pressure",
    question: "Define force. State its SI unit.",
    answer: "Force is a push or pull acting on an object that can change its state of rest or motion, its speed, its direction of motion, or its shape. The SI unit of force is the newton (N).",
    marks: 1,
    type: "definition"
  },
  {
    chapter: "Force and Pressure",
    question: "What is pressure? Write its formula and SI unit.",
    answer: "Pressure is defined as the force acting per unit area of a surface. It is given by the formula: Pressure = Force / Area (P = F/A). The SI unit of pressure is the pascal (Pa), where 1 Pa = 1 N/m\u00B2.",
    marks: 2,
    type: "definition"
  },
  {
    chapter: "Force and Pressure",
    question: "Define atmospheric pressure.",
    answer: "The pressure exerted by the atmosphere (the layer of air surrounding the Earth) on the surface of the Earth and on all objects on it is called atmospheric pressure. At sea level, atmospheric pressure is approximately 1.013 \u00D7 10\u2075 Pa.",
    marks: 1,
    type: "definition"
  },

  // -- short --
  {
    chapter: "Force and Pressure",
    question: "A force of 50 N is applied on an area of 0.5 m\u00B2. Calculate the pressure exerted.",
    answer: "Pressure = Force / Area = 50 N / 0.5 m\u00B2 = 100 Pa. The pressure exerted is 100 pascals.",
    marks: 2,
    type: "short"
  },
  {
    chapter: "Force and Pressure",
    question: "Why does a sharp knife cut better than a blunt one?",
    answer: "A sharp knife has a very thin edge, meaning the contact area is very small. Since Pressure = Force / Area, for the same applied force a smaller area produces greater pressure. This higher pressure allows the sharp knife to cut through objects more easily than a blunt knife, which has a larger contact area and therefore exerts less pressure.",
    marks: 2,
    type: "short"
  },
  {
    chapter: "Force and Pressure",
    question: "Give two examples each of contact forces and non-contact forces.",
    answer: "Contact forces (require physical contact): (i) Muscular force \u2014 the force exerted by muscles, e.g., lifting a bag. (ii) Frictional force \u2014 the force that opposes relative motion between two surfaces in contact, e.g., braking a bicycle. Non-contact forces (act from a distance): (i) Gravitational force \u2014 the force of attraction between any two objects due to their masses, e.g., an apple falling from a tree. (ii) Magnetic force \u2014 the force exerted by a magnet on magnetic materials, e.g., a magnet attracting iron nails.",
    marks: 2,
    type: "short"
  },
  {
    chapter: "Force and Pressure",
    question: "Why do porters place a round piece of cloth on their head while carrying heavy loads?",
    answer: "A round piece of cloth increases the area of contact between the heavy load and the porter\u2019s head. Since Pressure = Force / Area, increasing the area reduces the pressure on the head for the same load (force). This makes carrying heavy loads more comfortable and less painful.",
    marks: 2,
    type: "short"
  },
  {
    chapter: "Force and Pressure",
    question: "State whether force can change the shape of an object. Give an example.",
    answer: "Yes, a force can change the shape of an object. For example, when we press a rubber ball with our hands, the ball gets deformed (its shape changes). Similarly, when a potter applies force on soft clay, it changes shape to form pots.",
    marks: 1,
    type: "short"
  },

  // -- long --
  {
    chapter: "Force and Pressure",
    question: "Explain the effects of force on an object with suitable examples.",
    answer: "A force can produce the following effects on an object:\n\n1. A force can make a stationary object move: For example, when a footballer kicks a ball at rest, the ball starts moving.\n\n2. A force can stop a moving object: For example, a fielder catches a moving cricket ball, bringing it to rest.\n\n3. A force can change the speed of a moving object: For example, pedalling a bicycle harder increases its speed; applying brakes decreases it.\n\n4. A force can change the direction of a moving object: For example, when a batsman hits a ball, the direction of the ball changes.\n\n5. A force can change the shape and size of an object: For example, squeezing a sponge changes its shape; stretching a rubber band changes its size.\n\nNote: At least two forces are needed to change the shape of an object (forces applied from opposite sides).",
    marks: 5,
    type: "long"
  },
  {
    chapter: "Force and Pressure",
    question: "What is meant by pressure in liquids and gases? Explain with an activity that liquids exert pressure on the walls of a container.",
    answer: "Liquids and gases exert pressure on the walls of their containers and on any object immersed in them. This pressure acts in all directions.\n\nActivity: Take a plastic bottle and make four holes at different heights on its side. Fill the bottle with water and observe the streams of water coming out of each hole.\n\nObservation: Water comes out of all four holes, showing that water exerts pressure on the walls at all points. The stream from the lowest hole goes the farthest because the pressure exerted by a liquid increases with depth.\n\nKey points:\n1. Liquids exert equal pressure at the same depth in all directions.\n2. Pressure in a liquid increases with depth because the weight of the liquid column above increases.\n3. This is why the walls of dams are made thicker at the bottom \u2014 to withstand the higher pressure of water at greater depth.\n4. Gases also exert pressure on the walls of their container. For example, an inflated balloon stays stretched because the air inside exerts pressure on its walls.",
    marks: 5,
    type: "long"
  },

  // ============================================================
  // CHAPTER: Friction
  // ============================================================

  // -- definitions --
  {
    chapter: "Friction",
    question: "Define friction.",
    answer: "Friction is a force that opposes the relative motion (or the tendency of motion) between two surfaces in contact. It always acts in a direction opposite to the direction of motion or applied force.",
    marks: 1,
    type: "definition"
  },
  {
    chapter: "Friction",
    question: "What is static friction?",
    answer: "Static friction is the frictional force that acts on an object when it is at rest and a force is applied to move it but the object has not yet started moving. It balances the applied force up to a certain limit, preventing motion. The maximum value of static friction is called the limiting friction.",
    marks: 2,
    type: "definition"
  },
  {
    chapter: "Friction",
    question: "What is rolling friction?",
    answer: "Rolling friction is the frictional force that comes into play when an object rolls over a surface. It is much smaller than sliding friction for the same pair of surfaces, which is why wheels and ball bearings are used to reduce friction in machines.",
    marks: 1,
    type: "definition"
  },

  // -- short --
  {
    chapter: "Friction",
    question: "Why is it difficult to walk on a wet marble floor?",
    answer: "A wet marble floor has a very smooth surface with a thin layer of water acting as a lubricant. This greatly reduces the friction between the sole of the shoe and the floor. Since friction provides the necessary grip for walking, reduced friction makes it difficult to walk and increases the chance of slipping.",
    marks: 2,
    type: "short"
  },
  {
    chapter: "Friction",
    question: "Why are tyres made with treads (grooves)?",
    answer: "Treads (grooves) on tyres increase the roughness of the tyre surface and provide better grip on the road by increasing friction. On wet roads, the grooves channel water away from the contact area, preventing a thin film of water from forming between the tyre and the road (which would reduce friction). This improves safety and control of the vehicle.",
    marks: 2,
    type: "short"
  },
  {
    chapter: "Friction",
    question: "List two methods to reduce friction.",
    answer: "(i) Lubrication: Applying oil, grease, or other lubricants between moving parts reduces friction by forming a thin layer that prevents direct contact between surfaces. (ii) Using ball bearings: Ball bearings are placed between moving parts to convert sliding friction into rolling friction, which is much smaller.",
    marks: 2,
    type: "short"
  },
  {
    chapter: "Friction",
    question: "Why do we sprinkle powder on a carrom board?",
    answer: "Powder is sprinkled on a carrom board to reduce friction between the surface of the board and the striker/coins. The fine powder fills up the tiny irregularities on the board surface and acts as a dry lubricant, making the surface smoother. This allows the striker and coins to slide more freely.",
    marks: 2,
    type: "short"
  },
  {
    chapter: "Friction",
    question: "Explain why sliding friction is less than static friction.",
    answer: "When an object is at rest, the irregularities (interlocking points) of the two surfaces in contact get interlocked properly, so more force is needed to start the motion (static friction is higher). Once the object starts moving, the contact points do not get enough time to interlock fully, and the object moves over the peaks of the irregularities. Therefore, less force is needed to maintain motion, making sliding friction less than static friction.",
    marks: 2,
    type: "short"
  },

  // -- long --
  {
    chapter: "Friction",
    question: "Explain the factors affecting friction. Why is friction called a 'necessary evil'?",
    answer: "Factors affecting friction:\n\n1. Nature of the surfaces in contact: Rough surfaces produce more friction than smooth surfaces because rough surfaces have more irregularities that interlock with each other.\n\n2. Weight (normal force) of the object: Heavier objects press harder on the surface, causing the irregularities to interlock more firmly, thus increasing friction.\n\nNote: Friction does NOT depend on the area of contact between the surfaces.\n\nFriction as a 'necessary evil':\n\nFriction is a necessary evil because it has both advantages and disadvantages.\n\nAdvantages (necessary):\n- We cannot walk without friction \u2014 friction between our feet and the ground provides the grip needed to push off.\n- Writing with a pen or pencil is possible only because of friction.\n- Brakes in vehicles work due to friction.\n- We can hold objects because of friction between our hands and the object.\n\nDisadvantages (evil):\n- Friction causes wear and tear of machine parts, soles of shoes, and tyres.\n- Friction produces heat, which wastes energy and can damage machinery.\n- Friction reduces the efficiency of machines.\n\nSince friction is essential for many daily activities but also causes problems, it is aptly called a 'necessary evil'.",
    marks: 5,
    type: "long"
  },
  {
    chapter: "Friction",
    question: "What are the advantages and disadvantages of friction? How can friction be increased and decreased?",
    answer: "Advantages of friction:\n1. Friction enables us to walk on the ground by providing grip.\n2. It allows vehicles to move and stop (brakes work due to friction).\n3. We can write on paper using pens and pencils because of friction.\n4. Nails and screws hold things together due to friction.\n5. Friction between a matchstick and the matchbox helps light a fire.\n\nDisadvantages of friction:\n1. It causes wear and tear of machine parts, shoe soles, and tyres.\n2. It produces unwanted heat in machines, reducing efficiency.\n3. It makes movement of heavy objects difficult.\n4. It causes noise in machines.\n\nMethods to increase friction:\n1. Making surfaces rough, e.g., treaded tyres, rough soles on shoes.\n2. Using sand or gravel on slippery roads.\n3. Applying brake pads (which press against the wheel) to stop vehicles.\n\nMethods to decrease friction:\n1. Using lubricants (oil, grease) between moving surfaces.\n2. Using ball bearings to convert sliding friction to rolling friction.\n3. Polishing surfaces to make them smoother.\n4. Streamlining the shape of vehicles, boats, and aeroplanes to reduce air/water friction (fluid friction).",
    marks: 5,
    type: "long"
  },

  // ============================================================
  // CHAPTER: Sound
  // ============================================================

  // -- definitions --
  {
    chapter: "Sound",
    question: "Define sound. How is it produced?",
    answer: "Sound is a form of energy that produces the sensation of hearing. It is produced by the vibration (to and fro or back and forth motion) of an object. For example, when a drum is struck, its membrane vibrates, producing sound.",
    marks: 2,
    type: "definition"
  },
  {
    chapter: "Sound",
    question: "What is the frequency of a sound? State its SI unit.",
    answer: "The frequency of a sound is the number of vibrations (oscillations) produced per second. Its SI unit is hertz (Hz). One hertz means one vibration per second.",
    marks: 1,
    type: "definition"
  },
  {
    chapter: "Sound",
    question: "Define amplitude of a vibration.",
    answer: "The amplitude of a vibration is the maximum displacement of a vibrating object from its mean (rest) position. It determines the loudness of the sound \u2014 a larger amplitude produces a louder sound. Amplitude is measured in metres (m).",
    marks: 1,
    type: "definition"
  },

  // -- short --
  {
    chapter: "Sound",
    question: "Why can we not hear sound on the Moon?",
    answer: "Sound requires a material medium (solid, liquid, or gas) to travel. The Moon has no atmosphere (it is a vacuum). Since sound cannot travel through a vacuum, we cannot hear sound on the Moon.",
    marks: 2,
    type: "short"
  },
  {
    chapter: "Sound",
    question: "Differentiate between loudness and pitch of sound.",
    answer: "Loudness is determined by the amplitude of vibration. A larger amplitude results in a louder sound. It is measured in decibels (dB). Pitch is determined by the frequency of vibration. A higher frequency results in a higher (shriller) pitch. A woman\u2019s voice is generally of higher pitch (higher frequency) than a man\u2019s voice, which has a lower pitch (lower frequency).",
    marks: 2,
    type: "short"
  },
  {
    chapter: "Sound",
    question: "What is noise pollution? Give two sources.",
    answer: "Noise pollution is the presence of excessive or unwanted sounds in the environment that are harmful to human health and well-being. Sources include: (i) Loudspeakers and bursting of crackers during festivals. (ii) Sounds from heavy vehicles, horns, and construction machinery in cities.",
    marks: 2,
    type: "short"
  },
  {
    chapter: "Sound",
    question: "What is the audible range of frequency for humans?",
    answer: "Humans can hear sounds with frequencies between 20 Hz and 20,000 Hz. Sounds below 20 Hz are called infrasonic, and sounds above 20,000 Hz are called ultrasonic. Humans cannot hear infrasonic or ultrasonic sounds.",
    marks: 1,
    type: "short"
  },
  {
    chapter: "Sound",
    question: "Explain how sound is produced by a tuning fork.",
    answer: "When a tuning fork is struck against a rubber pad, its prongs begin to vibrate rapidly. The vibrating prongs push the surrounding air molecules, creating regions of compression (high pressure) and rarefaction (low pressure) that travel outward as a sound wave. This can be verified by touching a vibrating tuning fork to the surface of water \u2014 it causes splashing, confirming the vibrations.",
    marks: 2,
    type: "short"
  },

  // -- long --
  {
    chapter: "Sound",
    question: "Explain how sound is produced and how it travels through a medium. Why can sound not travel through vacuum?",
    answer: "Production of sound:\nSound is produced by the vibration of objects. When an object vibrates, it moves back and forth rapidly about its mean position. Examples: when we pluck a string of a guitar, it vibrates and produces sound; when we beat a drum, its membrane vibrates and produces sound; our voice is produced by the vibration of vocal cords in our throat.\n\nHow sound travels through a medium:\nWhen a vibrating object moves forward, it pushes the air molecules in front of it, creating a region of high pressure called compression. When it moves backward, it creates a region of low pressure called rarefaction. These alternate compressions and rarefactions form a sound wave that travels through the medium.\n\nImportant: The air molecules themselves do not travel from the source to the listener. They only vibrate about their mean positions and pass the disturbance (energy) to neighbouring molecules. This is why sound is called a longitudinal mechanical wave.\n\nWhy sound cannot travel through vacuum:\nSound is a mechanical wave that needs a material medium (solid, liquid, or gas) for its propagation. In a vacuum, there are no molecules to vibrate and pass the disturbance. Therefore, sound cannot travel through a vacuum. This was demonstrated by Robert Boyle\u2019s experiment, where a ringing bell placed inside a jar was gradually silenced as air was pumped out.",
    marks: 5,
    type: "long"
  },
  {
    chapter: "Sound",
    question: "What are the harmful effects of noise pollution? Suggest measures to limit noise pollution.",
    answer: "Harmful effects of noise pollution:\n1. Prolonged exposure to loud noise can cause temporary or permanent hearing loss.\n2. It causes difficulty in sleeping (insomnia) and leads to fatigue.\n3. It increases stress, anxiety, and can raise blood pressure (hypertension).\n4. It reduces the ability to concentrate, affecting work and studies.\n5. It can cause headaches and irritability.\n\nMeasures to limit noise pollution:\n1. Use of silencers in vehicles and machines: Silencers reduce the noise produced by engines.\n2. Planting trees: Trees absorb and reduce noise. A belt of trees along roads and around residential areas acts as a green noise barrier.\n3. No-honking zones: Declaring silent zones near hospitals and schools and enforcing no-honking rules.\n4. Using sound-absorbing materials: Walls and ceilings of auditoriums, studios, and conference halls should be covered with sound-absorbing materials.\n5. Limiting the use of loudspeakers and firecrackers: Following rules about timings and volume levels.\n6. Regular maintenance of machines: Well-maintained machines produce less noise.\n7. Personal protection: Using earplugs or earmuffs in noisy workplaces to protect hearing.",
    marks: 5,
    type: "long"
  },

  // ============================================================
  // CHAPTER: Light
  // ============================================================

  // -- definitions --
  {
    chapter: "Light",
    question: "What is the law of reflection?",
    answer: "The law of reflection states: (i) The angle of incidence is equal to the angle of reflection (angle i = angle r). (ii) The incident ray, the reflected ray, and the normal at the point of incidence all lie in the same plane.",
    marks: 2,
    type: "definition"
  },
  {
    chapter: "Light",
    question: "Define lateral inversion.",
    answer: "Lateral inversion is the phenomenon in which the left side of an object appears as the right side in its image formed by a plane mirror, and vice versa. For example, the word AMBULANCE is written in reverse on the front of ambulances so that it appears correctly in the rear-view mirror of vehicles ahead.",
    marks: 1,
    type: "definition"
  },
  {
    chapter: "Light",
    question: "What is dispersion of light?",
    answer: "The splitting of white light into its seven constituent colours (violet, indigo, blue, green, yellow, orange, and red \u2014 VIBGYOR) when it passes through a glass prism is called dispersion of light. This happens because different colours travel at different speeds in glass, causing them to bend by different amounts.",
    marks: 2,
    type: "definition"
  },

  // -- short --
  {
    chapter: "Light",
    question: "What are the characteristics of an image formed by a plane mirror?",
    answer: "An image formed by a plane mirror has the following characteristics: (i) The image is virtual and erect. (ii) The image is of the same size as the object. (iii) The image is formed at the same distance behind the mirror as the object is in front of it. (iv) The image is laterally inverted.",
    marks: 2,
    type: "short"
  },
  {
    chapter: "Light",
    question: "What is the difference between regular reflection and diffuse (irregular) reflection?",
    answer: "Regular reflection occurs when a beam of parallel light rays falls on a smooth, polished surface (like a plane mirror) and all reflected rays are also parallel. This gives a clear image. Diffuse reflection occurs when parallel light rays fall on a rough surface and the reflected rays scatter in different directions because the normal at each point is different. No clear image is formed, but it is this type of reflection that allows us to see objects around us.",
    marks: 2,
    type: "short"
  },
  {
    chapter: "Light",
    question: "Why can we not see an object in total darkness?",
    answer: "We see objects because light reflected from them enters our eyes. In total darkness, there is no light to fall on objects and get reflected. Since no light reaches our eyes, we cannot see anything. This shows that light is essential for vision.",
    marks: 1,
    type: "short"
  },
  {
    chapter: "Light",
    question: "What is a kaleidoscope? State its principle.",
    answer: "A kaleidoscope is a device that produces beautiful patterns by forming multiple reflections of coloured objects like bangles, beads, or coloured glass pieces placed inside it. It works on the principle of multiple reflections. It consists of three plane mirrors arranged in a triangular shape inside a tube. Light reflected from one mirror falls on another, producing multiple images that form symmetrical patterns.",
    marks: 2,
    type: "short"
  },
  {
    chapter: "Light",
    question: "Why does a pencil appear bent when partially immersed in water?",
    answer: "This happens due to the refraction of light. When light travels from water (denser medium) to air (rarer medium), it bends away from the normal. The light coming from the immersed part of the pencil bends as it passes from water to air, making the submerged part appear to be at a slightly different position. This makes the pencil appear bent or broken at the surface of water.",
    marks: 2,
    type: "short"
  },

  // -- long --
  {
    chapter: "Light",
    question: "Explain the structure and working of the human eye with the help of a diagram description. How do we see objects?",
    answer: "The human eye is a natural optical instrument that allows us to see objects.\n\nStructure:\n1. Cornea: The transparent, curved front surface of the eye. It refracts (bends) most of the light entering the eye.\n2. Iris: The coloured part of the eye (brown, blue, etc.) with a hole in the centre called the pupil. It controls the amount of light entering the eye.\n3. Pupil: The small opening in the centre of the iris. It becomes smaller in bright light and larger in dim light.\n4. Eye lens: A convex (converging) lens made of a transparent, flexible material. It can change its thickness (and thus its focal length) to focus on objects at different distances. This ability is called accommodation.\n5. Retina: A screen at the back of the eye where the image is formed. It contains light-sensitive cells called rods (detect light intensity) and cones (detect colour).\n6. Optic nerve: Carries the electrical signals from the retina to the brain, which interprets them as images.\n\nHow we see objects:\nLight from an object enters the eye through the cornea, which refracts it. The light passes through the pupil, and the eye lens further refracts it to form a real, inverted, and diminished image on the retina. The light-sensitive cells on the retina convert this image into electrical signals, which are sent to the brain via the optic nerve. The brain processes these signals and we perceive the object as upright, even though the image on the retina is inverted.",
    marks: 5,
    type: "long"
  },
  {
    chapter: "Light",
    question: "What are the differences between concave and convex mirrors? Give two uses of each.",
    answer: "Concave mirror: It is a spherical mirror whose reflecting surface is curved inward (like the inside of a spoon). When parallel rays of light fall on a concave mirror, they converge (come together) at a point called the focus.\n\nConvex mirror: It is a spherical mirror whose reflecting surface is curved outward (like the back of a spoon). When parallel rays of light fall on a convex mirror, they diverge (spread out) and appear to come from a point behind the mirror (virtual focus).\n\nKey differences:\n1. Concave mirrors can form real or virtual images depending on the position of the object, while convex mirrors always form virtual, erect, and diminished images.\n2. Concave mirrors converge light; convex mirrors diverge light.\n3. Concave mirrors can produce magnified images; convex mirrors always produce diminished images.\n4. The focal point of a concave mirror is in front of the mirror (real focus); the focal point of a convex mirror is behind the mirror (virtual focus).\n\nUses of concave mirrors:\n1. Used by dentists to see an enlarged image of teeth.\n2. Used as reflectors in torches, headlights, and solar concentrators.\n\nUses of convex mirrors:\n1. Used as rear-view mirrors in vehicles because they give a wider field of view and always form an erect image.\n2. Used at road junctions and sharp turns to see traffic from the other side.",
    marks: 5,
    type: "long"
  },

  // ============================================================
  // CHAPTER: Human Eye and Colourful World
  // ============================================================

  // -- definitions --
  {
    chapter: "Human Eye and Colourful World",
    question: "What is the power of accommodation of the eye?",
    answer: "The ability of the eye lens to change its focal length (by changing its curvature with the help of ciliary muscles) to focus on objects at different distances is called the power of accommodation. When viewing nearby objects, the lens becomes thicker (shorter focal length); when viewing distant objects, it becomes thinner (longer focal length).",
    marks: 2,
    type: "definition"
  },
  {
    chapter: "Human Eye and Colourful World",
    question: "Define the near point (least distance of distinct vision) of the eye.",
    answer: "The near point of the eye is the minimum distance at which an object can be seen clearly without strain. For a normal human eye, the near point is approximately 25 cm. An object placed closer than this distance appears blurred.",
    marks: 1,
    type: "definition"
  },
  {
    chapter: "Human Eye and Colourful World",
    question: "What is a spectrum?",
    answer: "The band of seven colours (violet, indigo, blue, green, yellow, orange, and red \u2014 VIBGYOR) obtained when white light is split by a glass prism is called a spectrum. Each colour bends by a different amount, with violet bending the most and red bending the least.",
    marks: 1,
    type: "definition"
  },

  // -- short --
  {
    chapter: "Human Eye and Colourful World",
    question: "What are the common defects of vision? Name them.",
    answer: "The three common defects of vision are: (i) Myopia (short-sightedness) \u2014 a person can see nearby objects clearly but cannot see distant objects clearly. (ii) Hypermetropia (long-sightedness) \u2014 a person can see distant objects clearly but cannot see nearby objects clearly. (iii) Presbyopia \u2014 the power of accommodation of the eye decreases with age, making it difficult to see nearby objects clearly.",
    marks: 2,
    type: "short"
  },
  {
    chapter: "Human Eye and Colourful World",
    question: "How is myopia corrected?",
    answer: "Myopia (short-sightedness) occurs when the image of a distant object is formed in front of the retina instead of on it. This happens because the eye lens becomes too thick or the eyeball is too long. It is corrected by using a concave (diverging) lens of appropriate focal length, which diverges the incoming light rays slightly before they enter the eye, so the image is formed on the retina.",
    marks: 2,
    type: "short"
  },
  {
    chapter: "Human Eye and Colourful World",
    question: "Why does the sky appear blue?",
    answer: "The sky appears blue due to the scattering of sunlight by the tiny molecules of gases in the atmosphere. This is called Rayleigh scattering. Blue light has a shorter wavelength and is scattered much more than red light (which has a longer wavelength). When we look at the sky, the scattered blue light reaches our eyes from all directions, making the sky appear blue.",
    marks: 2,
    type: "short"
  },
  {
    chapter: "Human Eye and Colourful World",
    question: "Why does the Sun appear reddish at sunrise and sunset?",
    answer: "At sunrise and sunset, sunlight travels through a much greater thickness of the atmosphere to reach us compared to noon. During this long path, most of the shorter wavelength light (blue, violet) gets scattered away. The longer wavelength light (red, orange) is scattered the least and reaches our eyes, making the Sun appear reddish.",
    marks: 2,
    type: "short"
  },
  {
    chapter: "Human Eye and Colourful World",
    question: "What is Tyndall effect? Give an example.",
    answer: "The Tyndall effect is the scattering of light by colloidal particles (tiny particles suspended in a medium). When a beam of light passes through a colloidal solution, the path of the light becomes visible due to the scattering of light by the colloidal particles. Example: When sunlight enters a dusty room through a small opening, the path of light is visible because dust particles in the air scatter the light (Tyndall effect).",
    marks: 2,
    type: "short"
  },

  // -- long --
  {
    chapter: "Human Eye and Colourful World",
    question: "Explain the formation of a rainbow. What conditions are necessary for a rainbow to be seen?",
    answer: "Formation of a rainbow:\nA rainbow is a natural spectrum of sunlight that appears in the sky after rain (or during rain when the sun is shining). It is formed due to the dispersion of sunlight by tiny water droplets suspended in the atmosphere.\n\nProcess:\n1. When sunlight enters a water droplet, it gets refracted (bent) and dispersed into its seven constituent colours (VIBGYOR).\n2. The dispersed light then undergoes total internal reflection at the inner surface of the droplet.\n3. The reflected light is again refracted as it comes out of the droplet.\n4. Different colours emerge at slightly different angles. Red light emerges at an angle of about 42\u00B0 and violet at about 40\u00B0 relative to the incoming sunlight.\n5. An observer sees red on the outer edge and violet on the inner edge of the rainbow.\n\nConditions necessary:\n1. Rain (water droplets must be present in the atmosphere, either during or just after rain).\n2. Sunshine (the Sun must be shining).\n3. The observer must stand with the Sun behind them and the rain or water droplets in front, because a rainbow is always formed in the direction opposite to the Sun.\n4. The Sun should be fairly low in the sky (usually seen in the morning or late afternoon, rarely at noon).",
    marks: 5,
    type: "long"
  },
  {
    chapter: "Human Eye and Colourful World",
    question: "Explain the three common defects of vision and how they are corrected.",
    answer: "The three common defects of vision are:\n\n1. Myopia (Short-sightedness / Near-sightedness):\n- In this defect, a person can see nearby objects clearly but distant objects appear blurred.\n- Cause: The eye lens becomes too thick (too converging), or the eyeball becomes too long. As a result, the image of distant objects is formed in front of the retina.\n- Correction: A concave lens (diverging lens) of suitable focal length is used. It diverges the light rays before they reach the eye lens, so the image shifts back to the retina.\n\n2. Hypermetropia (Long-sightedness / Far-sightedness):\n- In this defect, a person can see distant objects clearly but nearby objects appear blurred.\n- Cause: The eye lens becomes too thin (less converging), or the eyeball becomes too short. As a result, the image of nearby objects is formed behind the retina.\n- Correction: A convex lens (converging lens) of suitable focal length is used. It converges the light rays before they reach the eye lens, so the image shifts forward to the retina.\n\n3. Presbyopia:\n- This defect usually occurs in old age (generally after the age of 40).\n- The power of accommodation of the eye decreases because the ciliary muscles weaken and the eye lens becomes less flexible.\n- The person finds it difficult to see nearby objects clearly; the near point moves farther away.\n- Correction: Bifocal lenses are used \u2014 the upper part is a concave lens for seeing distant objects and the lower part is a convex lens for reading or seeing nearby objects. Sometimes, separate reading glasses with convex lenses are prescribed.",
    marks: 5,
    type: "long"
  }
];


const quizQuestions = [

  // ============================================================
  // CHAPTER: Force and Pressure
  // ============================================================
  {
    chapter: "Force and Pressure",
    question: "What is the SI unit of force?",
    options: ["Joule", "Newton", "Pascal", "Watt"],
    correct: 1
  },
  {
    chapter: "Force and Pressure",
    question: "Pressure is defined as:",
    options: ["Force \u00D7 Area", "Force / Area", "Force + Area", "Force \u2212 Area"],
    correct: 1
  },
  {
    chapter: "Force and Pressure",
    question: "Which of the following is a non-contact force?",
    options: ["Muscular force", "Frictional force", "Gravitational force", "Applied force"],
    correct: 2
  },
  {
    chapter: "Force and Pressure",
    question: "The SI unit of pressure is:",
    options: ["Newton", "Pascal", "Joule", "Kilogram"],
    correct: 1
  },
  {
    chapter: "Force and Pressure",
    question: "A force can change the ______ of an object.",
    options: ["Colour only", "Mass only", "Shape and state of motion", "Temperature only"],
    correct: 2
  },
  {
    chapter: "Force and Pressure",
    question: "Why are the walls of a dam thicker at the bottom?",
    options: [
      "To make the dam look beautiful",
      "Because pressure of water increases with depth",
      "Because water is lighter at the bottom",
      "To save construction material"
    ],
    correct: 1
  },
  {
    chapter: "Force and Pressure",
    question: "Which of the following increases pressure?",
    options: [
      "Increasing the area of contact",
      "Decreasing the force applied",
      "Decreasing the area of contact",
      "Using a lubricant"
    ],
    correct: 2
  },
  {
    chapter: "Force and Pressure",
    question: "Atmospheric pressure is caused by:",
    options: [
      "The weight of water on Earth",
      "The weight of the air column above the Earth's surface",
      "Magnetic force of the Earth",
      "Sunlight falling on the Earth"
    ],
    correct: 1
  },
  {
    chapter: "Force and Pressure",
    question: "A sharp nail goes into a wall more easily than a blunt one because it exerts:",
    options: ["Less pressure", "More pressure", "Same pressure", "No pressure"],
    correct: 1
  },
  {
    chapter: "Force and Pressure",
    question: "Two forces acting on an object in opposite directions are called:",
    options: ["Contact forces", "Balanced forces if equal", "Non-contact forces", "Muscular forces"],
    correct: 1
  },
  {
    chapter: "Force and Pressure",
    question: "What happens when two equal forces act on an object from opposite directions?",
    options: [
      "The object moves faster",
      "The object changes shape or does not move",
      "The object disappears",
      "The object becomes lighter"
    ],
    correct: 1
  },
  {
    chapter: "Force and Pressure",
    question: "Electrostatic force is an example of:",
    options: ["Contact force", "Muscular force", "Non-contact force", "Frictional force"],
    correct: 2
  },
  {
    chapter: "Force and Pressure",
    question: "If a force of 100 N acts on an area of 2 m\u00B2, the pressure is:",
    options: ["200 Pa", "50 Pa", "100 Pa", "0.02 Pa"],
    correct: 1
  },

  // ============================================================
  // CHAPTER: Friction
  // ============================================================
  {
    chapter: "Friction",
    question: "Friction always acts in a direction ______ to the motion.",
    options: ["Same", "Opposite", "Perpendicular", "At 45 degrees"],
    correct: 1
  },
  {
    chapter: "Friction",
    question: "Which type of friction is the smallest?",
    options: ["Static friction", "Sliding friction", "Rolling friction", "Fluid friction"],
    correct: 2
  },
  {
    chapter: "Friction",
    question: "Friction can be reduced by:",
    options: [
      "Making surfaces rougher",
      "Increasing the weight of the object",
      "Applying lubricants",
      "Increasing the area of contact"
    ],
    correct: 2
  },
  {
    chapter: "Friction",
    question: "Ball bearings are used to:",
    options: [
      "Increase sliding friction",
      "Convert sliding friction to rolling friction",
      "Increase the weight of machines",
      "Prevent machines from working"
    ],
    correct: 1
  },
  {
    chapter: "Friction",
    question: "Why do tyres have treads?",
    options: [
      "To reduce friction",
      "To make the tyre look attractive",
      "To increase friction for better grip",
      "To make the vehicle lighter"
    ],
    correct: 2
  },
  {
    chapter: "Friction",
    question: "Which of the following is NOT a way to reduce friction?",
    options: [
      "Polishing surfaces",
      "Using ball bearings",
      "Sprinkling sand on the surface",
      "Applying grease"
    ],
    correct: 2
  },
  {
    chapter: "Friction",
    question: "Static friction is ______ than sliding friction.",
    options: ["Less", "Greater", "Equal to", "Not related to"],
    correct: 1
  },
  {
    chapter: "Friction",
    question: "Friction produces:",
    options: ["Only motion", "Only heat", "Heat and wear and tear", "Cold"],
    correct: 2
  },
  {
    chapter: "Friction",
    question: "The force of friction depends on:",
    options: [
      "Colour of the surface",
      "Nature of surfaces and weight of the object",
      "Time of day",
      "Shape of the object only"
    ],
    correct: 1
  },
  {
    chapter: "Friction",
    question: "Friction is called a 'necessary evil' because:",
    options: [
      "It is always harmful",
      "It is always useful",
      "It is both useful and harmful",
      "It does not exist"
    ],
    correct: 2
  },
  {
    chapter: "Friction",
    question: "We sprinkle powder on a carrom board to:",
    options: [
      "Increase friction",
      "Reduce friction",
      "Make the board colourful",
      "Increase the weight of coins"
    ],
    correct: 1
  },
  {
    chapter: "Friction",
    question: "A boat or aeroplane has a streamlined shape to reduce:",
    options: ["Gravitational force", "Magnetic force", "Fluid friction", "Static friction"],
    correct: 2
  },
  {
    chapter: "Friction",
    question: "Friction is caused by:",
    options: [
      "Gravity pulling objects down",
      "Irregularities on the two surfaces in contact",
      "Air pressure",
      "The colour of surfaces"
    ],
    correct: 1
  },

  // ============================================================
  // CHAPTER: Sound
  // ============================================================
  {
    chapter: "Sound",
    question: "Sound is produced by:",
    options: ["Reflection of light", "Vibration of objects", "Change in colour", "Pressure of air"],
    correct: 1
  },
  {
    chapter: "Sound",
    question: "Sound cannot travel through:",
    options: ["Air", "Water", "Steel", "Vacuum"],
    correct: 3
  },
  {
    chapter: "Sound",
    question: "The SI unit of frequency is:",
    options: ["Decibel", "Metre", "Hertz", "Newton"],
    correct: 2
  },
  {
    chapter: "Sound",
    question: "The loudness of sound depends on:",
    options: ["Frequency", "Amplitude", "Speed", "Wavelength"],
    correct: 1
  },
  {
    chapter: "Sound",
    question: "The pitch of sound depends on:",
    options: ["Amplitude", "Loudness", "Frequency", "Medium"],
    correct: 2
  },
  {
    chapter: "Sound",
    question: "The audible range of frequency for humans is:",
    options: ["1 Hz to 10 Hz", "20 Hz to 20,000 Hz", "20,000 Hz to 50,000 Hz", "0 Hz to 10,000 Hz"],
    correct: 1
  },
  {
    chapter: "Sound",
    question: "Sounds above 20,000 Hz are called:",
    options: ["Infrasonic", "Audible", "Ultrasonic", "Subsonic"],
    correct: 2
  },
  {
    chapter: "Sound",
    question: "In humans, sound is produced by the vibration of:",
    options: ["Tongue", "Lips", "Vocal cords", "Lungs"],
    correct: 2
  },
  {
    chapter: "Sound",
    question: "Noise pollution can cause:",
    options: ["Hearing loss", "Better concentration", "Improved sleep", "Stronger muscles"],
    correct: 0
  },
  {
    chapter: "Sound",
    question: "Which of the following can produce sound?",
    options: [
      "A stretched rubber band when plucked",
      "A book kept on a table",
      "A glass of still water",
      "A pencil lying on a desk"
    ],
    correct: 0
  },
  {
    chapter: "Sound",
    question: "Sound travels fastest in:",
    options: ["Gases", "Liquids", "Solids", "Vacuum"],
    correct: 2
  },
  {
    chapter: "Sound",
    question: "The unit of loudness is:",
    options: ["Hertz", "Decibel", "Newton", "Pascal"],
    correct: 1
  },
  {
    chapter: "Sound",
    question: "A woman\u2019s voice is generally of higher pitch than a man\u2019s voice because:",
    options: [
      "Women speak louder",
      "Women\u2019s vocal cords vibrate with greater frequency",
      "Men speak softer",
      "Women\u2019s vocal cords have greater amplitude"
    ],
    correct: 1
  },

  // ============================================================
  // CHAPTER: Light
  // ============================================================
  {
    chapter: "Light",
    question: "The angle of incidence is equal to the angle of reflection. This is called:",
    options: ["Law of refraction", "Law of reflection", "Law of dispersion", "Law of diffraction"],
    correct: 1
  },
  {
    chapter: "Light",
    question: "An image formed by a plane mirror is:",
    options: [
      "Real and inverted",
      "Virtual and laterally inverted",
      "Real and magnified",
      "Virtual and magnified"
    ],
    correct: 1
  },
  {
    chapter: "Light",
    question: "Which mirror is used by dentists to examine teeth?",
    options: ["Plane mirror", "Convex mirror", "Concave mirror", "Coloured mirror"],
    correct: 2
  },
  {
    chapter: "Light",
    question: "Splitting of white light into seven colours by a prism is called:",
    options: ["Reflection", "Refraction", "Dispersion", "Diffraction"],
    correct: 2
  },
  {
    chapter: "Light",
    question: "Which colour of light bends the most during dispersion?",
    options: ["Red", "Yellow", "Green", "Violet"],
    correct: 3
  },
  {
    chapter: "Light",
    question: "Convex mirrors are used as rear-view mirrors because they:",
    options: [
      "Produce magnified images",
      "Produce real images",
      "Give a wider field of view",
      "Produce inverted images"
    ],
    correct: 2
  },
  {
    chapter: "Light",
    question: "Regular reflection occurs on:",
    options: [
      "Rough surfaces",
      "Smooth and polished surfaces",
      "Transparent surfaces only",
      "Black surfaces"
    ],
    correct: 1
  },
  {
    chapter: "Light",
    question: "When light passes from air to glass, it bends:",
    options: [
      "Away from the normal",
      "Towards the normal",
      "Parallel to the normal",
      "It does not bend"
    ],
    correct: 1
  },
  {
    chapter: "Light",
    question: "The word AMBULANCE is written in reverse on the vehicle so that:",
    options: [
      "It looks attractive",
      "It can be read correctly in a rear-view mirror",
      "It saves paint",
      "It follows traffic rules"
    ],
    correct: 1
  },
  {
    chapter: "Light",
    question: "A kaleidoscope works on the principle of:",
    options: [
      "Refraction of light",
      "Dispersion of light",
      "Multiple reflections of light",
      "Absorption of light"
    ],
    correct: 2
  },
  {
    chapter: "Light",
    question: "Light travels in:",
    options: ["Curved lines", "Straight lines", "Zigzag lines", "Circular paths"],
    correct: 1
  },
  {
    chapter: "Light",
    question: "An object that does not allow any light to pass through it is called:",
    options: ["Transparent", "Translucent", "Opaque", "Luminous"],
    correct: 2
  },

  // ============================================================
  // CHAPTER: Human Eye and Colourful World
  // ============================================================
  {
    chapter: "Human Eye and Colourful World",
    question: "The ability of the eye to focus on objects at different distances is called:",
    options: ["Persistence of vision", "Power of accommodation", "Near point", "Far point"],
    correct: 1
  },
  {
    chapter: "Human Eye and Colourful World",
    question: "The near point of a normal human eye is:",
    options: ["15 cm", "25 cm", "50 cm", "10 cm"],
    correct: 1
  },
  {
    chapter: "Human Eye and Colourful World",
    question: "Myopia is corrected by using:",
    options: ["Convex lens", "Concave lens", "Bifocal lens", "Cylindrical lens"],
    correct: 1
  },
  {
    chapter: "Human Eye and Colourful World",
    question: "Hypermetropia is corrected by using:",
    options: ["Concave lens", "Convex lens", "Plane mirror", "Concave mirror"],
    correct: 1
  },
  {
    chapter: "Human Eye and Colourful World",
    question: "The sky appears blue because of:",
    options: [
      "Reflection of light by clouds",
      "Scattering of blue light by the atmosphere",
      "Absorption of blue light by the sky",
      "Dispersion by raindrops"
    ],
    correct: 1
  },
  {
    chapter: "Human Eye and Colourful World",
    question: "The Sun appears reddish at sunrise and sunset because:",
    options: [
      "The Sun is actually red in colour",
      "The Sun is closer to Earth at those times",
      "Blue light is scattered away and red light reaches us",
      "Red light is absorbed by the atmosphere"
    ],
    correct: 2
  },
  {
    chapter: "Human Eye and Colourful World",
    question: "Which part of the eye controls the amount of light entering it?",
    options: ["Retina", "Cornea", "Iris", "Optic nerve"],
    correct: 2
  },
  {
    chapter: "Human Eye and Colourful World",
    question: "The image formed on the retina of the human eye is:",
    options: [
      "Virtual and erect",
      "Real and erect",
      "Real and inverted",
      "Virtual and inverted"
    ],
    correct: 2
  },
  {
    chapter: "Human Eye and Colourful World",
    question: "A rainbow is formed due to:",
    options: [
      "Reflection only",
      "Refraction only",
      "Dispersion, refraction, and total internal reflection",
      "Absorption of light"
    ],
    correct: 2
  },
  {
    chapter: "Human Eye and Colourful World",
    question: "In a rainbow, which colour appears on the outer edge?",
    options: ["Violet", "Blue", "Green", "Red"],
    correct: 3
  },
  {
    chapter: "Human Eye and Colourful World",
    question: "The Tyndall effect is the scattering of light by:",
    options: [
      "Large rocks",
      "Colloidal particles",
      "Planets",
      "Sound waves"
    ],
    correct: 1
  },
  {
    chapter: "Human Eye and Colourful World",
    question: "Presbyopia is usually found in:",
    options: ["Children", "Teenagers", "Young adults", "Old people"],
    correct: 3
  },
  {
    chapter: "Human Eye and Colourful World",
    question: "The colour of light that scatters the least in the atmosphere is:",
    options: ["Violet", "Blue", "Green", "Red"],
    correct: 3
  }
];
