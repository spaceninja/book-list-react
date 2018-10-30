const books = [
  {
    title: "Gideon the Ninth",
    authorLast: "Muir",
    authorFirst: "Tamsyn",
    isbn: "0000000001",
    rating: 0,
    length: 0,
    prioritize: true,
    release: "2019-09-24",
    series: "Ninth House #1",
    source: "Warren Ellis & Charlie Stross",
    note:
      "Lesbian necromancers explore a haunted gothic palace in space! Decadent nobles vie to serve the deathless emperor! Skeletons!",
    textSnippet:
      "An epic science fantasy that blends necromantic theory and thrilling swordplay with a wicked, sacrilegious sense of humor; a modern mix of Dune, Riddick, and Gormenghast."
  },
  {
    title: "Middlegame",
    authorLast: "McGuire",
    authorFirst: "Seanan",
    isbn: "0000000002",
    rating: 0,
    length: 0,
    release: "2019-05-07",
    source: "Tor",
    textSnippet:
      "Seanan McGuire introduces readers to a world of amoral alchemy, shadowy organizations, and impossible cities in a new standalone fantasy"
  },
  {
    title: "Static Ruin",
    authorLast: "White",
    authorFirst: "Corey J",
    isbn: "1250195535",
    rating: 0,
    length: 224,
    prioritize: true,
    release: "2018-11-06",
    series: "Voidwitch Saga #3",
    source: "io9",
    note:
      "Mars Xi is on the run with a hefty price on her head—and her mutant pet cat and a fellow human weapon, a young boy who can’t control his deadly powers, in tow. Can her father, living somewhere on the edge of the galaxy, help make things right?",
    textSnippet:
      "Corey J. White concludes his pulse-pounding space opera in Static Ruin."
  },
  {
    title: "Thin Air",
    authorLast: "Morgan",
    authorFirst: "Richard K",
    isbn: "0575075147",
    rating: 0,
    length: 400,
    prioritize: true,
    release: "2018-10-25",
    source: "io9",
    note:
      "…on Mars, a planet that’s become overrun with crime and corruption. Professional killer Hakan Veil is more than ready to retire home to Earth—but he’ll need to puzzle his way out of an extremely dangerous mystery first.",
    textSnippet:
      "Richard Morgan has always been one of our most successful SF authors with his fast-moving and brutal storylines, blistering plots and a powerful social conscience behind his work."
  },
  {
    title: "A Conspiracy of Truths",
    authorLast: "Rowland",
    authorFirst: "Alexandra",
    isbn: "1534412808",
    rating: 0,
    length: 432,
    release: "2018-10-23",
    note:
      "a fantasy of fake news, a wandering storyteller is arrested on charges of not only witchcraft, but a spy. His only chance to save himself—tell a good story, catch and hold their attention, or die.",
    textSnippet:
      "And yet, he has one great power: his stories in the ears of the rulers determined to prosecute him for betraying a nation he knows next to nothing about. The tales he tells will topple the Queens of Nuryevet and just maybe, save his life."
  },
  {
    title: "Exit Strategy",
    authorLast: "Wells",
    authorFirst: "Martha",
    isbn: "1250191858",
    rating: 4.35,
    length: 176,
    prioritize: true,
    release: "2018-10-02",
    series: "Murderbot Diaries #4",
    textSnippet:
      "The fourth and final part of the Murderbot Diaries series that began with All Systems Red."
  },
  {
    title: "Time's Convert",
    authorLast: "Harkness",
    authorFirst: "Deborah",
    isbn: "0399564519",
    rating: 4.13,
    length: 400,
    release: "2018-09-18",
    series: "All Souls Universe #1",
    source: "io9",
    note:
      "A revolutionary war surgeon chooses to become a vampire—and hundreds of years later, meets a young woman in Paris who makes the same choice. They both end up underestimating the challenges that come with being immortal.",
    textSnippet:
      "A passionate love story and a fascinating exploration of the power of tradition and the possibilities for change, Time&#39;s Convert will delight fans of the All Souls trilogy and all readers of magic, the supernatural, and romance."
  },
  {
    title: "Through Darkest Europe",
    authorLast: "Turtledove",
    authorFirst: "Harry",
    isbn: "0765379988",
    rating: 3.5,
    length: 320,
    release: "2018-09-18",
    source: "io9",
    note:
      "Alt-history book imagines that the Middle East and North Africa have long been the stable, thriving center of the world’s economy and culture, as unrest and fundamentalist violence causes ongoing turmoil in Europe.",
    textSnippet:
      "From the modern master of alternate history and New York Times bestselling author Harry Turtledove, Through Darkest Europe envisions a world dominated by a prosperous and democratic Middle East—and under threat from the world&#39;s worst…"
  },
  {
    title: "Stars Uncharted",
    authorLast: "Dunstall",
    authorFirst: "S.K.",
    isbn: "0399587624",
    rating: 4.04,
    length: 416,
    release: "2018-08-14",
    source: "io9",
    note:
      "When a very fortunate cargo pilot discovers an exploration ship filled with sophisticated records of previously unknown worlds, he gathers a ragtag crew for some deep-space treasure hunting.",
    textSnippet:
      "In this rip-roaring space opera, a ragtag band of explorers are out to make the biggest score in the galaxy."
  },
  {
    title: "Relic",
    authorLast: "Foster",
    authorFirst: "Alan Dean",
    isbn: "1101967633",
    rating: 3.84,
    length: 320,
    release: "2018-08-14",
    source: "io9",
    note:
      "After a virus decimates humanity, the last known man is rescued by an alien race. In exchange for his help as a research subject, the aliens agree to help him find the long-lost planet Earth—where he hopes against hope to find more survivors.",
    textSnippet:
      "The last known human searches the galaxy for companionship in a brilliant standalone novel from the legendary author of the Pip & Flinx series."
  },
  {
    title: "Rogue Protocol",
    authorLast: "Wells",
    authorFirst: "Martha",
    isbn: "1250191785",
    rating: 4.35,
    length: 158,
    prioritize: true,
    release: "2018-08-07",
    series: "Murderbot Diaries #3",
    textSnippet:
      "Rogue Protocol is the third in the Murderbot Diaries series, starring a human-like android who keeps getting sucked back into adventure after adventure, though it just wants to be left alone, away from humanity."
  },
  {
    title: "The Price You Pay",
    authorLast: "Truhen",
    authorFirst: "Aidan",
    isbn: "1524733377",
    rating: 3.88,
    length: 288,
    release: "2018-07-10",
    source: "Warren Ellis",
    note: "This book is fucking insane.",
    textSnippet:
      "In this audacious, lightning-paced thriller, a smart-mouthed, white-collar drug dealer--a hilariously irreverent antihero--seeks revenge when an unknown enemy takes out a contract on him."
  },
  {
    title: "Buying Time",
    authorLast: "Brown",
    authorFirst: "E.M.",
    isbn: "1781085080",
    rating: 3.8,
    length: 320,
    release: "2018-05-18",
    source: "io9",
    note:
      "A man wakes up and realizes it’s nine months earlier than it was the day before. The trend continues the next day, when he wakes up three years earlier, and on and on until he eventually seems to completely disappear. Where (or when) did he go?",
    textSnippet:
      "She interviews friends, acquaintances, and old lovers – and what she discovers will change not only Ed Richie’s life, but her own… Buying Time is a time-travel novel like no other."
  },
  {
    title: "The Smoke",
    authorLast: "Ings",
    authorFirst: "Simon",
    isbn: "057512010X",
    rating: 3.86,
    length: 300,
    release: "2018-05-17",
    source: "Warren Ellis",
    note:
      "A world in which World War 2 didn't happen, Gurwitsch's theories are carried by the Jewish Bund to a Russian homeland and developed to the point where the people of the Bund speciate.",
    textSnippet:
      "Simon Ings&#39; The Smoke is about love, loss and loneliness in an incomprehensible world."
  },
  {
    title: "Artificial Condition",
    authorLast: "Wells",
    authorFirst: "Martha",
    isbn: "0765397552",
    rating: 4.33,
    length: 159,
    purchased: true,
    prioritize: true,
    release: "2018-05-08",
    series: "Murderbot Diaries #2",
    textSnippet:
      "The follow-up to the hugely popular All Systems Red It has a dark past – one in which a number of humans were killed."
  },
  {
    title: "Medusa Uploaded",
    authorLast: "Devenport",
    authorFirst: "Emily",
    isbn: "1250169321",
    rating: 3.99,
    length: 317,
    release: "2018-05-01",
    series: "Medusa Cycle #1",
    source: "io9",
    note:
      "After she’s shoved out of an airlock and miraculously survives, a rebellious “worm” takes advantage of being presumed dead to prowl the generation starship she’s on, assassinating the powerful to try and even the stakes for everyone else.",
    textSnippet:
      "Medusa Uploaded by Emily Devenport offers readers a fast-paced science fiction thriller on the limits of power and control, and the knife-edge between killing for revenge or a greater good."
  },
  {
    title: "Black Helicopters",
    authorLast: "Kiernan",
    authorFirst: "Caitlin R.",
    isbn: "1250191130",
    rating: 3.46,
    length: 208,
    release: "2018-05-01",
    source: "io9",
    note:
      "Expanded version of the author’s World Fantasy Award-nominated Lovecraftian novella. It’s about a secret agent tasked with investigating strange happenings around New England that seem to be foreshadowing a horrific, chaotic invisible war.",
    textSnippet:
      "A dark jewel of a novella, this definitive edition of Caitlín R. Kiernan’s Black Helicopters is the expanded and completed version of the World Fantasy Award-nominated original."
  },
  {
    title: "From Unseen Fire",
    authorLast: "Morris",
    authorFirst: "Cass",
    isbn: "0756412242",
    rating: 3.93,
    length: 400,
    release: "2018-04-17",
    series: "Aven Cycle #1",
    source: "io9",
    note:
      "This historical fantasy debut is set in an alternate version of ancient Rome, as a talented young mage strives to protect her people in a society filled with dangerous secrets and sinister sorcery",
    textSnippet:
      "From Unseen Fire is the first novel in the Aven Cycle, a historical fantasy set in an alternate Rome, by debut author Cass Morris The Dictator is dead; long live the Republic."
  },
  {
    title: "Blackfish City",
    authorLast: "Miller",
    authorFirst: "Sam J.",
    isbn: "0062684841",
    rating: 3.6,
    length: 336,
    release: "2018-04-17",
    purchased: true,
    source: "io9",
    note:
      "Climate change leads to the construction of a floating city in the Arctic Circle but it’s a new kind of Wild West with crime, poverty, corruption, and disease. Hope arrives when a stranger rides into town—not on a horse, but on a killer whale.",
    textSnippet:
      "Blackfish City is a remarkably urgent—and ultimately very hopeful—novel about political corruption, organized crime, technology run amok, the consequences of climate change, gender identity, and the unifying power of human connection."
  },
  {
    title: "Before Mars",
    authorLast: "Newman",
    authorFirst: "Emma",
    isbn: "147322389X",
    rating: 4.1,
    length: 320,
    release: "2018-04-17",
    source: "io9",
    note:
      "A woman undergoes a long, grueling journey to her new job on Mars, only to have an eerie sense of déjà vu once she arrives.",
    series: "Planetfall #3",
    textSnippet:
      "After months of travel, Anna Kubrin finally arrives on Mars for her new job as a geologist and de facto artist-in-residence."
  },
  {
    title: "Imposter Syndrome",
    authorLast: "Baker",
    authorFirst: "Mishell",
    isbn: "1481451952",
    rating: 4.05,
    length: 480,
    prioritize: true,
    release: "2018-03-13",
    series: "Arcadia Project #3",
    textSnippet:
      "In the third book of the Nebula Award–nominated Arcadia Project series, which New York Times bestselling author Seanan McGuire called “exciting, inventive, and brilliantly plotted,” Millie Roper has to pull off two impossible ..."
  },
  {
    title: "The Armored Saint",
    authorLast: "Cole",
    authorFirst: "Myke",
    isbn: "0765395959",
    rating: 3.75,
    length: 206,
    release: "2018-02-20",
    source: "io9",
    note:
      "Like everyone in her village, young Heloise fears devils, agents of destruction summoned by the blink of a wizard’s eye. But in truth, she’s actually more scared of the Order—the vicious sect that wanders the country slaughtering anyone who even breathes the word “wizard” or “devil.”",
    textSnippet:
      "Myke Cole, author of the beloved military fantasy Shadow Ops series, debuts a new epic fantasy trilogy with The Armored Saint, a tale of religious tyrants, arcane war-machines, and underground resistance that will enthrall epic fantasy ..."
  },
  {
    title: "Embers of War",
    authorLast: "Powell",
    authorFirst: "Gareth L.",
    isbn: "1785655183",
    rating: 4.05,
    length: 411,
    release: "2018-02-20",
    source: "io9",
    note:
      "a sentient warship that tries to atone for participating in a genocide by becoming a rescue vessel",
    series: "Embers of War #1",
    textSnippet:
      "From BSFA Award winning author Gareth L. Powell comes the first in a new epic sci-fi trilogy exploring the legacies of war The sentient warship Trouble Dog was built for violence, yet following a brutal war, she is disgusted by her role in ..."
  },
  {
    title: "One Way",
    authorLast: "Morden",
    authorFirst: "S.J.",
    isbn: "1473222567",
    rating: 3.63,
    length: 358,
    purchased: true,
    release: "2018-02-15",
    source: "io9",
    note:
      "A crew of workers—all ex-cons—constructing a new base on Mars start falling victim to deadly “accidents” that don’t quite add up. Can the remaining astronauts figure out who’s picking them off before they’re all laid to waste?",
    textSnippet: "A murder mystery set on the frozen red wastes of Mars."
  },
  {
    title: "Gunpowder Moon",
    authorLast: "Pedreira",
    authorFirst: "David",
    isbn: "0062676083",
    rating: 3.64,
    length: 289,
    purchased: true,
    release: "2018-02-13",
    source: "io9",
    note:
      "Life on the Moon, circa 2072, is already complicated even before the first lunar murder is committed.",
    textSnippet:
      "Interesting quirks and divided loyalties flesh out this first novel in which sf and mystery intersect in a well-crafted plot."
  },
  {
    title: "A Darker Shade of Magic",
    authorLast: "Schwab",
    authorFirst: "V.E.",
    purchased: true,
    isbn: "0765376458",
    rating: 4.09,
    length: 401,
    release: "2015-02-24",
    series: "Shades of Magic #1",
    source: "book club",
    note:
      "For fans of Neil Gaiman, Jonathan Strange & Mr Norrell, and…Hamilton?!",
    textSnippet:
      "Serving as an ambassador of his own world while carrying messages to parallel-universe Londons with respective magical abilities and conflicts, Kell hides his secret smuggling activities only to be set up with a forbidden object from a dark…"
  },
  {
    title: "A Discovery of Witches",
    authorLast: "Harkness",
    authorFirst: "Deborah",
    isbn: "0143119680",
    rating: 3.99,
    length: 579,
    release: "2011-02-01",
    series: "All Souls Trilogy #1",
    textSnippet:
      "Discovering a magical manuscript in Oxford&#39;s library, scholar Diana Bishop, a descendant of witches who has rejected her heritage, inadvertently unleashes a fantastical underworld of daemons, witches and vampires whose activities center…"
  },
  {
    title: "A Shadow in Summer",
    authorLast: "Abraham",
    authorFirst: "Daniel",
    purchased: true,
    isbn: "0765313405",
    rating: 3.59,
    length: 331,
    series: "Long Price Quartet #1",
    source: "Tor Book of the Month",
    note:
      "The first in a four-part fantasy for readers who love worldbuilding. From one of the authors behind the beloved sci-fi series The Expanse!",
    textSnippet:
      "A business manager, her apprentice, and a pair of outskirters become the only protectors of a financially powerful, technologically advanced city that is being threatened by the conquering armies of Galt, which are plotting against the city…"
  },
  {
    title: "Thrawn",
    authorLast: "Zahn",
    authorFirst: "Timothy",
    isbn: "1780894848",
    rating: 4.28,
    length: 427,
    prioritize: true,
    series: "Star Wars: Thrawn #1",
    textSnippet:
      "The Sunday Times Bestsller In this definitive novel, readers will follow Thrawn&#39;s rise to power--uncovering the events that created one of the most iconic villains in Star Wars history."
  },
  {
    title: "The Book of Phoenix",
    authorLast: "Okorafor",
    authorFirst: "Nnedi",
    isbn: "0756410193",
    rating: 3.89,
    length: 232,
    series: "Who Fears Death #0.1",
    textSnippet:
      "A fiery spirit dances from the pages of the Great Book. She brings the aroma of scorched sand and ozone. She has a story to tell…. The Book of Phoenix is a unique work of magical futurism."
  },
  {
    title: "Kushiel's Dart",
    authorLast: "Carey",
    authorFirst: "Jacqueline",
    isbn: "0330493744",
    rating: 4.04,
    length: 934,
    purchased: true,
    series: "Phèdre's Trilogy #1",
    source: "twitter",
    note:
      "An all time fave of mine: Spies; Court Intrigue; Sacred sex work; Queerness; BDSM; Purple prose; An utterly unforgettable f/f D/s scene",
    textSnippet:
      "Sold into servitude in the Night Court as a child, Phedre no Delaunay is a woman who struggles for honour and duty, whose loyalty to the land she loves will take her to the edge of despair, and beyond."
  },
  {
    title: "Sleeping Giants",
    authorLast: "Neuvel",
    authorFirst: "Sylvain",
    isbn: "1101886692",
    note: "the mystery of the bizarre artifact remains unsolved",
    source: "Tor newsletter",
    rating: 3.84,
    length: 322,
    purchased: true,
    series: "Themis Files #1",
    textSnippet:
      "A swift and spellbinding tale told almost exclusively through transcriptions of interviews conducted by a mysterious and unnamed character, this is a unique debut that describes a hunt for truth, power, and giant body parts."
  },
  {
    title: "Seed to Harvest Bundle",
    authorLast: "Butler",
    authorFirst: "Octavia E.",
    isbn: "0446698903",
    note: "everyone recommends Octavia Butler",
    rating: 4.32,
    length: 788,
    purchased: true,
    series: "Patternmaster #1-4",
    textSnippet:
      "In these four novels, award-winning author Octavia E. Butler tells the classic story that began her legendary career: a mythic tale of the transformation of civilization."
  },
  {
    title: "Wild Seed",
    authorLast: "Butler",
    authorFirst: "Octavia E.",
    isbn: "0446676977",
    note: "everyone recommends Octavia Butler",
    rating: 4.21,
    length: 320,
    purchased: true,
    series: "Patternmaster #1",
    textSnippet:
      "Doro is an entity who changes bodies like clothes, killing his hosts by reflex -- or design."
  },
  {
    title: "The Wrong Stars",
    authorLast: "Pratt",
    authorFirst: "Tim",
    isbn: "0857667092",
    rating: 3.89,
    length: 396,
    purchased: true,
    series: "Axiom #1",
    source: "io9",
    note:
      "It starts with a deep-space salvage crew discovering a seemingly long-abandoned ship that turns out to have one occupant—who, once revived, warns them of an alien race that mixes advanced technology with pure evil.",
    textSnippet:
      "The crew of the freight and salvage ship White Raven encounter a space explorer that claims to have powerful extraterrestrial knowledge, passed down to her by a different alien race than humanity is currently allied with."
  },
  {
    title: "Fragile Things",
    authorLast: "Gaiman",
    authorFirst: "Neil",
    isbn: "0060515228",
    rating: 4.01,
    length: 400,
    prioritize: true,
    note: "Contains Sherlock Holmes/Cthulu story",
    textSnippet:
      "Such marvelous creations and more—including a short story set in the world of The Matrix, and others set in the worlds of gothic fiction and children&#39;s fiction—can be found in this extraordinary collection, which showcases Gaiman&#39;s ..."
  },
  {
    title: "Europe in Autumn",
    authorLast: "Hutchinson",
    authorFirst: "Dave",
    isbn: "1781081948",
    rating: 3.73,
    length: 432,
    purchased: true,
    note: "By the author of Acadie",
    series: "Fractured Europe #1",
    textSnippet:
      "Europe in Autumn is a thriller of espionage and the future which reads like the love child of John le Carré and Franz Kafka."
  },
  {
    title: "Provenance",
    authorLast: "Leckie",
    authorFirst: "Ann",
    isbn: "0356506967",
    rating: 3.86,
    length: 448,
    purchased: true,
    prioritize: true,
    note: "From the author of Ancillary Mercy",
    textSnippet:
      "Following her record-breaking debut trilogy, Ann Leckie, winner of the Hugo, Nebula, Arthur C. Clarke and Locus Awards, returns with an enthralling new novel of power, theft, privilege and birthright."
  },
  {
    title: "Trigger Warnings",
    authorLast: "Gaiman",
    authorFirst: "Neil",
    isbn: "0062330268",
    rating: 3.92,
    length: 371,
    purchased: true,
    prioritize: true,
    source: "Jen Myers",
    textSnippet:
      "Multiple award winning, #1 New York Times bestselling author Neil Gaiman returns to dazzle, captivate, haunt, and entertain with this third collection of short fiction following Smoke and Mirrors and Fragile Things—which includes a never ..."
  },
  {
    title: "Wool Omnibus",
    authorLast: "Howey",
    authorFirst: "Hugh",
    isbn: "1476733953",
    rating: 4.24,
    length: 509,
    purchased: true,
    source: "Gabe",
    series: "Wool #1-5",
    textSnippet:
      "In a future toxic landscape, a community that lives in an underground silo is rocked by the desire of Sheriff Holston, who has upheld the group&#39;s rules for years, to go outside, setting in motion events that kindle the fire of revolution."
  },
  {
    title: "Wool",
    authorLast: "Howey",
    authorFirst: "Hugh",
    isbn: "1461057205",
    rating: 4.12,
    length: 58,
    purchased: true,
    source: "Gabe",
    series: "Wool #1",
    textSnippet:
      "Thousands of them have lived underground. They've lived there so long, there are only legends about people living anywhere else. Such a life requires rules. Strict rules. There are things that must not be discussed. Like going outside. Never mention you might like going outside. Or you'll get what you wish for."
  },
  {
    title: "Too Like the Lightning",
    authorLast: "Palmer",
    authorFirst: "Ada",
    isbn: "0765378000",
    rating: 3.87,
    length: 432,
    purchased: true,
    source: "io9",
    series: "Terra Ignota #1",
    textSnippet:
      "In a future where convicts like Mycroft Canner must wander the world being useful to all he meets, he encounters Carlyle Foster, a spiritual counselor in a world that has outlawed religion, and a young boy named Bridger with the ability to ..."
  },
  {
    title: "Mechanical Failure",
    authorLast: "Zieja",
    authorFirst: "Joe",
    isbn: "1481459287",
    rating: 3.72,
    length: 345,
    purchased: true,
    note:
      "Remarkable & Sarcastic: When Rogers returns after only a year away, something has changed. These are soldiers—actual soldiers doing actual soldier things like preparing for a war that Rogers is sure doesn’t exist. Rogers vows to put a stop to all this nonsense—even if it means doing actual work.",
    series: "Epic Failure #1",
    textSnippet:
      "These are soldiers—actual soldiers doing actual soldier things like preparing for a war that Rogers is sure doesn’t exist. Rogers vows to put a stop to all this nonsense—even if it means doing actual work."
  },
  {
    title: "Skeen's Leap",
    authorLast: "Clayton",
    authorFirst: "Jo",
    isbn: "1504038452",
    rating: 3.74,
    length: 320,
    purchased: true,
    series: "Skeen #1",
    textSnippet:
      "The first book in a thrilling trilogy featuring the inimitable Skeen, Skeen’s Leap cements Clayton’s well-deserved reputation as one of the premier purveyors of science fantasy, alongside Andre Norton, C. J. Cherryh, and Marion Zimmer ..."
  },
  {
    title: "The Boy on the Bridge",
    authorLast: "Carey",
    authorFirst: "M.R.",
    isbn: "0316300330",
    rating: 4.02,
    length: 400,
    purchased: true,
    prioritize: true,
    series: "Girl With All the Gifts #2",
    textSnippet:
      "From the author of USA Today bestseller The Girl With All the Gifts, a terrifying new novel set in the same post-apocalyptic world."
  },
  {
    title: "Revenger",
    authorLast: "Reynolds",
    authorFirst: "Alastair",
    isbn: "0575090537",
    rating: 3.81,
    length: 411,
    purchased: true,
    source: "io9",
    textSnippet:
      "Revenger is a science fiction adventure story set in the rubble of our solar system in the dark, distant future - a tale of space pirates, buried treasure and phantom weapons, of unspeakable hazards and single-minded heroism . . . and of ..."
  },
  {
    title: "Shadow & Claw",
    authorLast: "Wolfe",
    authorFirst: "Gene",
    isbn: "0312890176",
    rating: 4.04,
    length: 417,
    purchased: true,
    note: "Gene Wolfe’s enigmatic Shadow of the Torturer is always a treat.",
    series: "Book of the New Sun #1-2",
    textSnippet:
      "The shadow of the torturer: In a thoroughly decadent world of the future, Severian the torturer is cast out from the torturer&#39;s guild when he falls in love with one of his victims and allows her to die."
  },
  {
    title: "The Shadow of the Torturer",
    authorLast: "Wolfe",
    authorFirst: "Gene",
    isbn: "0671540661",
    rating: 3.79,
    length: 262,
    purchased: true,
    note: "Gene Wolfe’s enigmatic Shadow of the Torturer is always a treat.",
    series: "Book of the New Sun #1",
    textSnippet:
      "In a thoroughly decadent world of the future, Severian the torturer is cast out from the torturer&#39;s guild when he falls in love with one of his victims and allows her to die"
  },
  {
    title: "Lilith's Brood Bundle",
    authorLast: "Butler",
    authorFirst: "Octavia E.",
    isbn: "0446676101",
    rating: 4.31,
    length: 754,
    purchased: true,
    note:
      "Recommended to Kara and by many people on Twitter in the wake of the white boy writing about slavery debacle",
    series: "Xenogenesis #1-3",
    textSnippet:
      "But Lilith and all humanity must now share the world with uncanny, unimaginably alien creatures: their own children. This is their story."
  },
  {
    title: "Dawn",
    authorLast: "Butler",
    authorFirst: "Octavia E.",
    isbn: "0446603775",
    rating: 4.11,
    length: 248,
    purchased: true,
    note:
      "Recommended to Kara and by many people on Twitter in the wake of the white boy writing about slavery debacle",
    series: "Xenogenesis #1",
    textSnippet:
      "Lilith lyapo awoke from a centuries-long sleep to find herself aboard the vast spaceship of the Oankali."
  },
  {
    title: "The Black Tides of Heaven",
    authorLast: "Yang",
    authorFirst: "J.Y.",
    isbn: "076539541X",
    rating: 3.96,
    length: 240,
    purchased: true,
    series: "Tensorate #1",
    textSnippet:
      "Can Akeha find peace without shattering the bond they share with their twin?"
  },
  {
    title: "The Blade Itself",
    authorLast: "Abercrombie",
    authorFirst: "Joe",
    isbn: "159102594X",
    rating: 4.14,
    length: 544,
    purchased: true,
    source: "Everyone",
    series: "First Law #1",
    textSnippet: "Infamous Logen Ninefingers has finally run out of luck."
  },
  {
    title: "The Emperor's Blades",
    authorLast: "Stavely",
    authorFirst: "Brian",
    isbn: "0765336405",
    rating: 4.14,
    length: 593,
    purchased: true,
    source: "Verge and io9",
    note:
      "An excellent start to a fantasy epic. Modern epic fantasy mixed in with a nice dose of Lovecraftian weirdness",
    series: "Chronicle of the Unhewn Throne #1",
    textSnippet:
      "The children of an assassinated emperor try to stay alive and avenge their father&#39;s death while continuing down their individual life-paths, one in a monastery, another training with elite soldiers, and one appointed a minister determined ..."
  },
  {
    title: "The Sheep Look Up",
    authorLast: "Brunner",
    authorFirst: "John",
    isbn: "1932100016",
    rating: 3.98,
    length: 398,
    purchased: true,
    source: "Warren Ellis",
    textSnippet:
      "An enduring classic, this book offers a dramatic and prophetic look at the potential consequences of the escalating destruction of Earth."
  },
  {
    title: "Singularity Sky",
    authorLast: "Stross",
    authorFirst: "Charles",
    isbn: "1841493341",
    rating: 3.82,
    length: 356,
    purchased: true,
    prioritize: true,
    note:
      "A space opera universe I invented circa 1996 and set two novels in—originally to be a series, but, alas, due to internal consistency issues I won't be writing any more of these.",
    series: "Eschaton #1",
    textSnippet:
      "In the twenty-first century man created the Eschaton, a sentient artificial intelligence."
  },
  {
    title: "Iron Sunrise",
    authorLast: "Stross",
    authorFirst: "Charles",
    isbn: "1841493368",
    rating: 3.97,
    length: 448,
    note:
      "A space opera universe I invented circa 1996 and set two novels in—originally to be a series, but, alas, due to internal consistency issues I won't be writing any more of these.",
    series: "Eschaton #2",
    textSnippet:
      "In the twenty-first century man created the Eschaton, a sentient artificial intelligence."
  },
  {
    title: "The Magician King",
    authorLast: "Grossman",
    authorFirst: "Lev",
    isbn: "043402080X",
    rating: 3.91,
    length: 418,
    purchased: true,
    series: "Magicians #2",
    textSnippet:
      "The Magician Kingis a grand voyage into the dark, glittering heart of magic, an extraordinary journey that allows the imagination to run riot and proves Grossman is the modern heir to C.S. Lewis."
  },
  {
    title: "The Rift",
    authorLast: "Allan",
    authorFirst: "Nina",
    isbn: "1785650378",
    rating: 3.4,
    length: 400,
    purchased: true,
    source: "io9",
    note:
      "A woman goes missing as a teen and returns 20 years later, claiming she’s spent the intervening time on another planet. Her sister is thrilled but is unsure about whether or not she should believe those tales of intergalactic travel.",
    textSnippet:
      "Selena and Julie are sisters. As children they were closest companions, but as they grow towards maturity, a rift develops between them. There are greater rifts, however. Julie goes missing at the age of seventeen."
  },
  {
    title: "Pandemic",
    authorLast: "Riddle",
    authorFirst: "A.G.",
    isbn: "1940026091",
    rating: 4.08,
    length: 696,
    purchased: true,
    note: "Author of Atlantis Gene",
    series: "Extinction Files #1",
    textSnippet: "In Africa, a mysterious outbreak spreads quickly."
  },
  {
    title: "Fluency",
    authorLast: "Wells",
    authorFirst: "Jennifer Foehner",
    isbn: "0990479811",
    rating: 3.8,
    length: 377,
    purchased: true,
    note:
      "found while browsing: 'NASA discovered the alien ship lurking in the asteroid belt in the 1960s. They kept the Target under intense surveillance for decades, letting the public believe they were exploring the solar system, while they worked feverishly to refine the technology needed to reach it.'",
    series: "Confluence #1",
    textSnippet:
      "As the derelict ship devolves into chaos and the crew gets cut off from their escape route, Jane must decide if she can trust the alien’s help to survive. *This is the bestselling novel in its original form."
  },
  {
    title: "Three Parts Dead",
    authorLast: "Gladstone",
    authorFirst: "Max",
    isbn: "0765333104",
    rating: 3.98,
    length: 334,
    purchased: true,
    source: "Verge",
    note:
      "Craft Sequence is an amazing series of urban fantasy novels, set in a richly imagined world where magic is treated more like law or coding than something mystical.​",
    series: "Craft Sequence #1",
    textSnippet:
      "Hired to resurrect a deceased fire god to protect his rioting city, Tara, a first-year associate in an international necromantic firm, teams up with a chain-smoking, faith-questioning priest to build a case in the city&#39;s courts and ..."
  },
  {
    title: "Coyote",
    authorLast: "Steele",
    authorFirst: "Allen M.",
    isbn: "0441009743",
    rating: 3.83,
    length: 412,
    purchased: true,
    note:
      "US becomes an oppressive regime, group of dissidents steal a starship to colonize a moon. …looks as the challenges of settling a colony on an alien world with alien biology, as well as the politics involved in recreating a society away from Earth.",
    series: "Coyote #1",
    textSnippet:
      "In 2070, a group of political dissidents and their families escape the repressive world of twenty-first-century Earth to seek new lives as interstellar colonists, placing themselves in cold sleep for a more than two-hundred-year odyssey to ..."
  },
  {
    title: "The Amazing Adventures of Kavalier & Clay",
    authorLast: "Chabon",
    authorFirst: "Michael",
    isbn: "0812983580",
    rating: 4.17,
    length: 658,
    purchased: true,
    source: "Mrs Stockman",
    textSnippet:
      "In 1939 New York City, Joe Kavalier, a refugee from Hitler&#39;s Prague, joins forces with his Brooklyn-born cousin, Sammy Clay, to create comic-book superheroes inspired by their own fantasies, fears, and dreams."
  },
  {
    title: "Waste of Space",
    authorLast: "Damico",
    authorFirst: "Gina",
    isbn: "0544633164",
    rating: 3.54,
    length: 512,
    purchased: true,
    source: "io9",
    note:
      "Imagine The Real World—in space. …the kids are actually on an elaborate soundstage. The deception makes for a ratings hit, but things get weird when the cast is tricked into believing they’ve suddenly lost all communications with Earth.",
    textSnippet:
      "From the author of Croak comes this raucous account of ten teenagers picked to live on a rocket ship, get shot into space, and have their adventures broadcast live to the entire world."
  },
  {
    title: "The Gone-Away World",
    authorLast: "Harkaway",
    authorFirst: "Nick",
    isbn: "0307389073",
    rating: 4.13,
    length: 594,
    purchased: true,
    source: "Recommended to Kara, and by Professor Elemental",
    textSnippet:
      "With a fire burning along the Jorgmund Pipe, Gonzo Lubitsch and his colleagues at the Haulage and HazMat Emergency Civil Freebooting Company are hired to put it out--and to save humankind in the process."
  },
  {
    title: "Rewinder",
    authorLast: "Battles",
    authorFirst: "Brett",
    isbn: "1500766941",
    rating: 3.88,
    length: 300,
    purchased: true,
    source: "Gabe",
    series: "Rewinder #1",
    textSnippet:
      "The job at first sounds like it involves researching old books and records, but Denny soon learns it&#39;s far from it. A Rewinder&#39;s job is to observe history. In person.--from back cover."
  },
  {
    title: "Destroyer",
    authorLast: "Battles",
    authorFirst: "Brett",
    isbn: "1503951596",
    rating: 3.76,
    length: 242,
    purchased: true,
    source: "Gabe",
    series: "Rewinder #2",
    textSnippet:
      "With the whole of human history altered, Denny Younger may be the last rewinder in existence-- and the last person on earth with a chaser unit capable of time travel."
  },
  {
    title: "Armada",
    authorLast: "Cline",
    authorFirst: "Ernest",
    isbn: "0804137250",
    rating: 3.5,
    length: 368,
    purchased: true,
    note: "by the author of Ready Player One",
    textSnippet:
      "The New Novel From The Bestselling Author Of Ready Player One It&#39;s just another day of high school for Zack Lightman."
  },
  {
    title: "Gnomon",
    authorLast: "Harkaway",
    authorFirst: "Nick",
    isbn: "1785151274",
    rating: 3.95,
    length: 560,
    purchased: true,
    source: "A Working Library and Warren Ellis",
    note:
      "You want to know how good GNOMON is? I hate him for it. Haaaate. I had a little hategasm just typing those words.",
    textSnippet:
      "It is a magnificent achievement ... He&#39;s never written a bad book, but this is the one that&#39;ll see him mentioned in the same breath as William Gibson and David Mitchell ... This book seriously just destroyed me with joy."
  },
  {
    title: "Retrograde",
    authorLast: "Cawdron",
    authorFirst: "Peter",
    isbn: "1328834557",
    rating: 3.78,
    length: 256,
    purchased: true,
    textSnippet:
      "The international team at the Mars Endeavour colony is prepared for every eventuality except one—what happens when disaster strikes Earth?"
  },
  {
    title: "Central Station",
    authorLast: "Tidhar",
    authorFirst: "Lavie",
    isbn: "1616962143",
    rating: 3.51,
    length: 290,
    purchased: true,
    source: "Warren Ellis",
    textSnippet:
      "Rising above them is Central Station, the interplanetary hub between all things: the constantly shifting Tel Aviv; a powerful virtual arena; and the space colonies where humanity has gone to escape the ravages of poverty and war"
  },
  {
    title: "Parable of the Sower",
    authorLast: "Butler",
    authorFirst: "Octavia E.",
    isbn: "0446675504",
    rating: 4.14,
    length: 356,
    purchased: true,
    series: "Earthseed #1",
    textSnippet:
      "Parable of the Sower is a dystopian classic of terror and hope-the story of an African American teenage girl trying to survive in an all-too-real future-from the &quot;grand dame&quot; of science fiction, Octavia E. Butler."
  },
  {
    title: "Parable of the Talents",
    authorLast: "Butler",
    authorFirst: "Octavia E.",
    isbn: "1888363819",
    rating: 4.22,
    length: 434,
    purchased: true,
    series: "Earthseed #2",
    textSnippet:
      "Lauren Olamina&#39;s daughter, Larkin, describes the broken and alienated world of 2032, as war racks the North American continent and an ultra-conservative religious crusader becomes president"
  },
  {
    title: "Children of Time",
    authorLast: "Tchaikovsky",
    authorFirst: "Adrian",
    isbn: "1447273281",
    rating: 4.29,
    length: 609,
    purchased: true,
    source: "Gabe",
    textSnippet:
      "But all is not right in this new Eden. In the long years since the planet was abandoned, the work of its architects has born disastrous fruit. The planet is not waiting for them, pristine and unoccupied."
  },
  {
    title: "The Rise and Fall of D.O.D.O.",
    authorLast: "Stephenson",
    authorFirst: "Neal and Galland, Nicole",
    isbn: "0062409166",
    rating: 3.91,
    length: 768,
    prioritize: true,
    purchased: true,
    textSnippet:
      "Written with the genius, complexity, and innovation that characterize all of Neal Stephenson’s work and steeped with the down-to-earth warmth and humor of Nicole Galland’s storytelling style, this exciting and vividly realized work of ..."
  },
  {
    title: "A Wizard of Earthsea",
    authorLast: "Le Guin",
    authorFirst: "Ursula K.",
    isbn: "0553383043",
    rating: 3.99,
    length: 210,
    purchased: true,
    note: "Recommended by someone… 'favorite by proxy'?",
    series: "Earthsea Cycle #1",
    textSnippet:
      "A boy grows to manhood while attempting to subdue the evil he unleashed on the world as an apprentice to the Master Wizard."
  },
  {
    title: "The Lathe of Heaven",
    authorLast: "Le Guin",
    authorFirst: "Ursula K.",
    isbn: "0060512741",
    rating: 4.1,
    length: 194,
    purchased: true,
    note: "Recommended by someone… 'favorite by proxy'?",
    textSnippet:
      "Through his dreams, George Orr can make alternate realities real"
  },
  {
    title: "Constitution",
    authorLast: "Webb",
    authorFirst: "Nick",
    isbn: "151476993X",
    rating: 3.89,
    length: 362,
    purchased: true,
    note: "Recommended by author: Galactica-like",
    series: "Legacy Fleet #1",
    textSnippet:
      "Our new ships burn like straw. All our careful preparations are wasted. Only one man, one crew, and the oldest starship in the fleet stand between the Earth and certain destruction: ISS Constitution."
  },
  {
    title: "The Dig",
    authorLast: "Siemsen",
    authorFirst: "Michael",
    isbn: "1940757088",
    rating: 3.62,
    length: 377,
    purchased: true,
    source: "Gabe",
    series: "Matt Turner #1",
    textSnippet:
      "A mysterious woven metal artifact is found at a paleontological dig in Africa."
  },
  {
    title: "The Bloodline Feud",
    authorLast: "Stross",
    authorFirst: "Charles",
    isbn: "1447237617",
    rating: 3.88,
    length: 576,
    purchased: true,
    note: "parallel-universe techno-thriller by Charles Stross",
    series: "Merchant Princes #1-2",
    textSnippet:
      "Believing she has found a career-making story when she stumbles upon a money-laundering scheme, reporter Miriam Beckstein is shocked when she is fired and threatened with death, a situation that turns increasingly bizarre when she learns ..."
  },
  {
    title: "The Family Trade",
    authorLast: "Stross",
    authorFirst: "Charles",
    isbn: "0765348217",
    rating: 3.51,
    length: 308,
    purchased: true,
    note: "parallel-universe techno-thriller by Charles Stross",
    series: "Merchant Princes #1",
    textSnippet:
      "Believing she has found a career-making story when she stumbles upon a money-laundering scheme, reporter Miriam Beckstein is shocked when she is fired and threatened with death, a situation that turns increasingly bizarre when she learns…"
  },
  {
    title: "Behind the Throne",
    authorLast: "Wagners",
    authorFirst: "K.B.",
    isbn: "0316308609",
    rating: 3.84,
    length: 432,
    purchased: true,
    source: "io9",
    note:
      "Orbit Books is responsible for some of the most exciting space adventures out there:, including James S.A. Corey’s Expanse series, Kim Stanley Robinson’s Aurora, and Ann Leckie’s Ancillary trilogy.",
    series: "Indranan War #1",
    textSnippet:
      "Dive into this action-packed, Star Wars-style science fiction adventure from debut author K.B. Wagers."
  },
  {
    title: "Dauntless",
    authorLast: "Campbell",
    authorFirst: "Jack",
    isbn: "0441014186",
    rating: 3.94,
    length: 308,
    purchased: true,
    source: "XO kickstarter",
    series: "Lost Fleet #1",
    textSnippet:
      "Returning from survival hibernation and assuming the command of the Alliance fleet, legendary hero Captain John &quot;Black Jack&quot; Geary must retrieve the stolen Syndic hypernet key to save the Alliance from destruction at the hands of the ..."
  },
  {
    title: "Left Hand of Darkness",
    authorLast: "Le Guin",
    authorFirst: "Ursula K.",
    isbn: "0441478123",
    rating: 4.06,
    length: 320,
    purchased: true,
    note:
      "A lone human ambassador is sent to Winter, an alien world without sexual prejudice, where the inhabitants can change their gender whenever they choose.",
    textSnippet:
      "On behalf of his government, an earthling travels to an alien, backward world whose inhabitants are all ambisexual"
  },
  {
    title: "Artemis",
    authorLast: "Weir",
    authorFirst: "Andy",
    isbn: "0553448129",
    rating: 3.68,
    length: 322,
    purchased: true,
    note: "From the author of the Martian",
    textSnippet:
      "Augmenting her limited income by smuggling contraband to survive on the Moon&#39;s wealthy city of Artemis, Jazz agrees to commit what seems to be a perfect, lucrative crime, only to find herself embroiled in a conspiracy for control of the ..."
  },
  {
    title: "Little Brother",
    authorLast: "Doctorow",
    authorFirst: "Cory",
    isbn: "0765319853",
    rating: 3.93,
    length: 387,
    purchased: true,
    series: "Little Brother #1",
    textSnippet:
      "After being interrogated for days by the Department of Homeland Security in the aftermath of a major terrorist attack on San Francisco, California, seventeen-year-old Marcus, released into what is now a police state, decides to use his ..."
  },
  {
    title: "New York 2140",
    authorLast: "Robinson",
    authorFirst: "Kim Stanley",
    isbn: "031626234X",
    rating: 3.6,
    length: 624,
    source: "Susana Polo",
    note:
      "NY2140 is a fascinating extrapolation of NYC after sea levels rise by 50ft. 'I was there, I was there when the levies broke and half the city drowned in 2 hours'",
    textSnippet:
      "Through the eyes of the varied inhabitants of one building, Kim Stanley Robinson shows us how one of our great cities will change with the rising tides."
  },
  {
    title: "Nightwise",
    authorLast: "Belcher",
    authorFirst: "R.S.",
    isbn: "0765374609",
    rating: 3.66,
    length: 320,
    source: "io9",
    textSnippet:
      "R.S. Belcher, the acclaimed author of The Six-Gun Tarot and The Shotgun Arcana launches a gritty new urban fantasy series set in today&#39;s seedy occult underworld in Nightwise."
  },
  {
    title: "My Real Children",
    authorLast: "Walton",
    authorFirst: "Jo",
    isbn: "0765332655",
    rating: 3.76,
    length: 555,
    purchased: true,
    source: "Steve Cook",
    note: "a dying woman's memories alternate between two timelines",
    textSnippet:
      "Remembering two different pasts that reflect contrasting historical events and relationships with different people, an elderly Patricia Cowan wonders about her identity while gazing at a moon that might house benign or malicious ..."
  },
  {
    title: "The Book of Joan",
    authorLast: "Yuknavitch",
    authorFirst: "Lidia",
    isbn: "0062383272",
    rating: 3.15,
    length: 288,
    source: "Warren Ellis",
    note:
      "Women who love, who hate, who kill, who destroy. It's about what happens after the end of the world, where (another) other-humanly elite has gone to orbit to live out sexless, loveless lives of bizarre art and ritual",
    textSnippet:
      "The Book of Joan is an explosive work of fiction that considers what it means to be human, the fluidity of sex and gender, and the urgency of art as a means for survival."
  },
  {
    title: "After Atlas",
    authorLast: "Newman",
    authorFirst: "Emma",
    isbn: "0425282406",
    rating: 4.17,
    length: 369,
    source: "io9",
    note:
      "A geologist whose art has captured the imagination of a space-obsessed multibillionaire accepts a new a gig on Mars, partially as a way to escape the postpartum depression that’s been plaguing her back on Earth. But as soon as she arrives, she makes a shocking discovery—and suddenly she’s surrounded by strangers she can’t trust in a space colony that’s millions and millions of miles away from home.",
    series: "Planetfall #2",
    textSnippet:
      "Clarke Award Shortlist Acclaimed author Emma Newman returns to the captivating universe she created in Planetfall with a stunning science fiction mystery where one man&#39;s murder is much more than it seems."
  },
  {
    title: "Planetfall",
    authorLast: "Newman",
    authorFirst: "Emma",
    isbn: "0425282392",
    rating: 3.69,
    length: 336,
    source: "io9",
    series: "Planetfall #1",
    textSnippet:
      "From the Hugo Award-winning author of Between Two Thorns comes the first novel in a captivating science fiction series where a secret withheld to protect humanity&#39;s future may lead to its undoing."
  },
  {
    title: "Accelerando",
    authorLast: "Stross",
    authorFirst: "Charles",
    isbn: "1841493899",
    rating: 3.88,
    length: 415,
    prioritize: true,
    source: "Warren Ellis",
    note:
      "I re-read Charles Stross’ ACCELERANDO at least once a year.  More often, I’ll return to just the first three chapters once every few months.  ACCELERANDO is a sprawling (yet massively condensed and concentrated) piece of radical hard sf about the deep computational future.  It’s also about Manfred Macx, “venture altruist,” staying ahead of the memetic curve with an exotic set of information-processing hardware.",
    textSnippet:
      "His most ambitious novel to date, ACCELERANDO is a multi-generational saga following a brilliant clan of 21st-century posthumans."
  },
  {
    title: "City of Golden Shadow",
    authorLast: "Williams",
    authorFirst: "Tad",
    isbn: "0886777631",
    rating: 3.9,
    length: 780,
    source: "Susana Polo",
    note:
      "a married couple who commission a highly immersive simulation of what modern South America would be like if Europe had never discovered it, basically South American Wakanda",
    series: "Otherland #1",
    textSnippet:
      "In the near future, a global conspiracy threatens to sacrifice the future of humanity for the promise of a utopia based on virtual reality, in a critically praised novel by the best-selling author of Tailchaser&#39;s Song."
  },
  {
    title: "My Father, the Pornographer: A Memoir",
    authorLast: "Offutt",
    authorFirst: "Chris",
    isbn: "1501112465",
    rating: 3.59,
    length: 272,
    textSnippet:
      "After inheriting 400 novels of pornography written by his father in the 1970s and &#39;80s, critically acclaimed author Chris Offutt sets out to make sense of a complicated father-son relationship in this carefully observed, beautifully ..."
  },
  {
    title: "The City of Brass",
    authorLast: "Chakraborty",
    authorFirst: "S.A.",
    isbn: "0008239398",
    rating: 4.23,
    length: 533,
    source: "io9",
    purchased: true,
    note:
      "In this debut novel set in and around 18th century Cairo, a faux fortune teller realizes she has actual magic powers, awakened by the arrival of a mysterious djinn warrior who opens up her world for better and worse.",
    series: "Daevabad #1",
    textSnippet:
      "But alongside this new world the old stories linger. Tales of djinn and spirits. Of cities hidden among the swirling sands of the desert, full of enchantment, desire and riches."
  },
  {
    title: "Ironclads",
    authorLast: "Tchaikovsky",
    authorFirst: "Adrian",
    isbn: "1781085684",
    rating: 3.83,
    length: 200,
    release: "2017-11-07",
    source: "io9",
    textSnippet:
      "Scions have no limits Scions do not die And Scions do not disappear Sergeant Ted Regan has a problem."
  },
  {
    title: "Feed",
    authorLast: "Grant",
    authorFirst: "Mira",
    isbn: "0316081051",
    rating: 3.86,
    length: 599,
    purchased: true,
    source: "Many",
    note:
      "My all-time favorite zombie apocalypse series!!! Spoiled 4 any other!!! About MUCH more than zombies.",
    series: "Newsflesh #1",
    textSnippet:
      "Now, twenty years after the Rising, Georgia and Shaun Mason are on the trail of the biggest story of their lives-the dark conspiracy behind the infected. The truth will out, even if it kills them."
  },
  {
    title: "The Daedalus Incident",
    authorLast: "Martinez",
    authorFirst: "Michael",
    isbn: "159780858X",
    rating: 3.64,
    length: 400,
    source: "humble bundle",
    series: "Daedalus #1",
    textSnippet:
      "Set sail among the stars with this uncanny tale, where adventure awaits, and dimensions collide!"
  },
  {
    title: "Who Fears Death",
    authorLast: "Okarafor",
    authorFirst: "Nnedi",
    isbn: "075640617X",
    rating: 3.95,
    length: 386,
    purchased: true,
    prioritize: true,
    note: "Going to be an HBO series",
    series: "Who Fears Death #1",
    textSnippet:
      "Born into post-apocalyptic Africa to a mother who was raped after the slaughter of her entire tribe, Onyesonwu is tutored by a shaman and discovers that her magical destiny is to end the genocide of her people."
  },
  {
    title: "Ka: Dar Oakley in the Ruin of Ymr",
    authorLast: "Crowley",
    authorFirst: "John",
    isbn: "1481495593",
    rating: 4.13,
    length: 464,
    source: "io9",
    textSnippet:
      "He tells the story of his impossible lives and deaths to a man who has learned his language in this exquisite novel which unravels like a fireside fable, by award-winning author John Crowley."
  },
  {
    title: "The Tiger's Daughter",
    authorLast: "Arsenault Rivera",
    authorFirst: "K",
    isbn: "0765392534",
    rating: 3.77,
    length: 526,
    source: "io9",
    series: "Their Bright Ascendency #1",
    textSnippet:
      "When a dark force begins to overtake the crumbling border walls of the Hokkaran Empire, an infamous Qorin warrior and a spoiled divine warrior princess set out to save their people and fufill the prophecy made at their birth."
  },
  {
    title: "Barbary Station",
    authorLast: "Stearns",
    authorFirst: "R.E.",
    isbn: "1481476874",
    rating: 3.29,
    length: 384,
    prioritize: true,
    source: "Verge",
    note:
      "Space pirates! Specifically, queer space pirates of colour fighting off a murderous AI. Adda and Iridian are a pair of engineers who hijack a colony ship to join a pirate crew, only to discover that Barbary Station is controlled by an insane AI. This looks like it could be a really exciting space opera adventure.",
    series: "Shieldrunner Pirates #1",
    textSnippet:
      "Desperate for employment, they hijack a colony ship and plan to join a famed pirate crew living in luxury at Barbary Station, an abandoned shipbreaking station in deep space. But when they arrive there, nothing is as expected."
  },
  {
    title: "Ironfoot",
    authorLast: "Duncan",
    authorFirst: "Dave",
    isbn: "1597809179",
    rating: 4.17,
    length: 344,
    release: "2017-10-03",
    source: "io9",
    series: "Enchanter General #1",
    textSnippet:
      "A lowly enchanter finds himself entangled in a plot to assassinate the king in a new historical fantasy series set in twelfth century England."
  },
  {
    title: "Akata Warrior",
    authorLast: "Okorafor",
    authorFirst: "Nnedi",
    isbn: "067078561X",
    rating: 4.29,
    length: 496,
    prioritize: true,
    source: "io9",
    series: "Akata Witch #2",
    textSnippet:
      "Now stronger, feistier, and a bit older, Sunny Nwazue, along with her friends from the the Leopard Society, travel through worlds, both visible and invisible, to the mysterious town of Osisi, where they fight in a climactic battle to save ..."
  },
  {
    title: "Akata Witch",
    authorLast: "Okorafor",
    authorFirst: "Nnedi",
    isbn: "0670011967",
    rating: 4.09,
    length: 349,
    prioritize: true,
    source: "io9",
    series: "Akata Witch #1",
    textSnippet:
      "Twelve-year-old Sunny Nwazue, an American-born albino child of Nigerian parents, moves with her family back to Nigeria, where she learns that she has latent magical powers which she and three similarly gifted friends use to catch a serial ..."
  },
  {
    title: "An Unkindness of Magicians",
    authorLast: "Howard",
    authorFirst: "Kat",
    isbn: "1481451219",
    rating: 3.81,
    length: 352,
    purchased: true,
    source: "Tor",
    textSnippet:
      "“A remarkable writer.” —Neil Gaiman, bestselling author of American Gods An Alex Award Winner There is a dark secret that is hiding at the heart of New York City and diminishing the city’s magicians’ power in this fantasy thriller ..."
  },
  {
    title: "Autonomous",
    authorLast: "Newitz",
    authorFirst: "Annalee",
    isbn: "0765392070",
    rating: 3.62,
    length: 303,
    note:
      "Autonomous is to biotech and AI what Neuromancer was to the Internet. - Neal Stephenson",
    textSnippet:
      "Judith &quot;Jack&quot; Chen, a scientist-turned-drug pirate, travels the world in a submarine to bring cheap medicine to the poor, but when her latest drug hack results in a trail of lethal overdoses, she is pursued by a jaded military agent and his ..."
  },
  {
    title: "We Are Legion (We Are Bob)",
    authorLast: "Taylor",
    authorFirst: "Dennis",
    isbn: "1680680587",
    rating: 4.29,
    length: 304,
    source: "Jarrod",
    series: "Bobiverse #1",
    textSnippet:
      "Bob Johansson has just sold his software company and is looking forward to a life of leisure."
  },
  {
    title: "A Man of Shadows",
    authorLast: "Noon",
    authorFirst: "Jeff",
    isbn: "085766669X",
    rating: 3.46,
    length: 352,
    source: "Warren Ellis",
    series: "John Nyquis #1",
    textSnippet:
      "Below the neon skies of Dayzone - a city where the lights never go out, and night has been banished - lowly private eye John Nyquist takes on a teenage runaway case."
  },
  {
    title: "The Peripheral",
    authorLast: "Gibson",
    authorFirst: "William",
    isbn: "0399158448",
    rating: 3.94,
    length: 485,
    source: "A Working Library",
    note:
      "A curious kind of time travel in which information—but not atoms—flows between a near future and one further away.",
    textSnippet:
      "Depending on her veteran brother&#39;s benefits in a city where jobs outside the drug trade are rare, Flynne assists her brother&#39;s latest beta-test tech assignment only to uncover an elaborate murder scheme."
  },
  {
    title: "Orbital Cloud",
    authorLast: "Fujiii",
    authorFirst: "Taiyo",
    isbn: "1421592134",
    rating: 3.69,
    length: 528,
    source: "Verge",
    textSnippet:
      "This book will thrill and delight readers with its tight plotting and brilliant scientific speculation, and it describes the space enthusiast community with a level of authenticity and passion seldom seen in fiction."
  },
  {
    title: "The Legend of Eli Monpress",
    authorLast: "Aaron",
    authorFirst: "Rachel",
    isbn: "0316193577",
    rating: 4.16,
    length: 1040,
    source: "Chuck",
    note:
      "fun antihero with high charisma, literally convinces the rock wall of his prison cell to set him free",
    series: "Legend of Eli Monpress #1-3",
    textSnippet:
      "But he&#39;ll start small for now. He&#39;ll just steal something that no one will miss - at least for a while. Like a king. The Legend of Eli Monpress includes the novels: The Spirit Thief, The Sprit Rebellion, and The Spirit Eater."
  },
  {
    title: "The Spirit Thief",
    authorLast: "Aaron",
    authorFirst: "Rachel",
    isbn: "0316120820",
    rating: 3.88,
    length: 310,
    source: "Chuck",
    note:
      "fun antihero with high charisma, literally convinces the rock wall of his prison cell to set him free",
    series: "Legend of Eli Monpress #1",
    textSnippet:
      "Eli Monpress is talented. He's charming. And he's a thief. But not just any thief. He's the greatest thief of the age - and he's also a wizard. And with the help of his partners - a swordsman with the most powerful magic sword in the world but no magical ability of his own, and a demonseed who can step through shadows and punch through walls - he's going to put his plan into effect."
  },
  {
    title: "Tomorrow's Kin",
    authorLast: "Kress",
    authorFirst: "Nancy",
    isbn: "0765390310",
    rating: 3.64,
    length: 352,
    purchased: true,
    source: "io9",
    note:
      "imagines that mysterious aliens have taken up residence in New York City—ahead of a looming disaster that Earth’s scientists must scramble to prevent.",
    series: "Yesterday's Kin #1",
    textSnippet:
      "Tomorrow&#39;s Kin is the first volume in and all new hard science fiction trilogy by Nancy Kress based on the Nebula Award-winning Yesterday&#39;s Kin."
  },
  {
    title: "Dichronauts",
    authorLast: "Egan",
    authorFirst: "Greg",
    isbn: "1597806056",
    rating: 3.53,
    length: 312,
    source: "io9",
    note:
      "Constantly-shifting habitable zone means cities must be constantly re-mapped, a surveyor (whose best friend is the leech-like creature that lives in his brain and helps him navigate) makes an alarming discovery at the edge of civilization.",
    textSnippet:
      "Seth is a surveyor, along with his friend Theo, a leech-like creature running through his skull who tells Seth what lies to his left and right."
  },
  {
    title: "Master of the Five Magics",
    authorLast: "Hardy",
    authorFirst: "Lyndon",
    isbn: "0345319079",
    rating: 3.81,
    length: 541,
    source: "Pat Rothfuss",
    note: "Recommended by Pat Rothfuss as similar to his magic system",
    series: "Magic by the Numbers #1",
    textSnippet:
      "Alodar was a mere apprentice thaumaturge, learning the least of the five arts of magic."
  },
  {
    title: "The Magician's Land",
    authorLast: "Grossman",
    authorFirst: "Lev",
    isbn: "0670015679",
    rating: 4.16,
    length: 402,
    purchased: true,
    series: "Magicians #3",
    textSnippet:
      "Visiting his magical college after being cast out of the secret land of Fillory, Quentin Coldwater, accompanied by brilliant undergraduate Plum, encounters desperate practitioners of gray magic before discovering a sorcery masterwork that ..."
  },
  {
    title: "The Wanderers",
    authorLast: "Howrey",
    authorFirst: "Meg",
    isbn: "0399574638",
    rating: 3.55,
    length: 370,
    source: "Verge",
    note:
      "A private space company is getting ready to put astronauts on Mars for the first time. The trio are tasked with a 17mo mission to test their training and ensure that they’re ready to travel to the Red Planet.",
    textSnippet:
      "Astonishingly imaginative, tenderly comedic, and unerringly wise, The Wanderers explores the differences between those who go and those who stay, telling a story about the desire behind all exploration: the longing for discovery and the ..."
  },
  {
    title: "Hull Zero Three",
    authorLast: "Bear",
    authorFirst: "Greg",
    isbn: "0316072818",
    rating: 3.37,
    length: 307,
    note: "Recommended in Let's Play of Stasis",
    textSnippet:
      "Where are they going? What happened to the dream of a new life? What happened to Hull 03? All will be answered, if he can survive the ship. HULL ZERO THREE is an edge-of-your-seat thrill ride through the darkest reaches of space."
  },
  {
    title: "Ararat",
    authorLast: "Golden",
    authorFirst: "Christopher",
    isbn: "1250117054",
    rating: 3.39,
    length: 320,
    source: "io9",
    textSnippet:
      "As a newly engaged couple climbs Mount Ararat in Turkey, an [earthquake reveals a secret cave]."
  },
  {
    title: "The Bridge",
    authorLast: "Banks",
    authorFirst: "Iain",
    isbn: "0349102155",
    rating: 3.84,
    length: 288,
    prioritize: true,
    note:
      "The Bridge has been described as a ‘secret Culture novel’, a mystical key to Banks’s literary universe. It blurred the boundaries between genres – and revealed his sense of fun and games",
    textSnippet:
      "The man who wakes up in the extraordinary world of a bridge has amnesia, and his doctor doesn&#39;t seem to want to cure him. Does it matter? Exploring the bridge occupies most of his days. But at night there are his dreams."
  },
  {
    title: "The Word for World is Forest",
    authorLast: "Le Guin",
    authorFirst: "Ursula K.",
    isbn: "1473205786",
    rating: 3.92,
    length: 160,
    purchased: true,
    source: "Verge",
    note: "Can be read in any order",
    series: "Hainish Cycle #2",
    textSnippet:
      "When the inhabitants of a peaceful world are conquered by the bloodthirsty yumens, their existence is irrevocably altered."
  },
  {
    title: "Portal of a Thousand Worlds",
    authorLast: "Duncan",
    authorFirst: "Dave",
    isbn: "1504038754",
    rating: 3.84,
    length: 482,
    purchased: true,
    source: "io9",
    textSnippet:
      "Ten centuries have passed since the last time the Portal of a Thousand Worlds opened, bringing chaos, upheaval, and radical change to the then-ruling dynasty, and now the mystical gateway is rumored to be on the verge of opening once more."
  },
  {
    title: "All Our Wrong Todays",
    authorLast: "Mastai",
    authorFirst: "Elan",
    isbn: "1101985135",
    rating: 3.8,
    length: 384,
    source: "io9",
    textSnippet:
      "Elan Mastai&#39;s acclaimed debut novel is a story of friendship and family, of unexpected journeys and alternate paths, and of love in its multitude of forms."
  },
  {
    title: "The Stars Are Legion",
    authorLast: "Hurley",
    authorFirst: "Kameron",
    isbn: "0857666614",
    rating: 3.7,
    length: 400,
    source: "io9",
    note:
      "standalone space opera about a woman who awakes with no memory amid war between world-ships traveling the darkest regions of the universe. In this desperate setting she realizes she may hold the key to salvation—but at what cost?",
    textSnippet:
      "Somewhere on the outer rim of the universe, a mass of decaying worldships known as the Legion is traveling in the seams between the stars."
  },
  {
    title: "Norse Mythology",
    authorLast: "Gaiman",
    authorFirst: "Neil",
    isbn: "039360909X",
    rating: 4.09,
    length: 299,
    prioritize: true,
    textSnippet:
      "Introducing an instant classic--master storyteller Neil Gaiman presents a dazzling version of the great Norse myths."
  },
  {
    title: "The Fortress at the End of Time",
    authorLast: "McDermott",
    authorFirst: "Joe M.",
    isbn: "076539281X",
    rating: 3.08,
    length: 305,
    source: "Verge",
    note:
      "One such clone is assigned to man a distant outpost, and has to come to terms with a terrible incident in his past. This has the looks of a thoughtful and interesting read.",
    textSnippet:
      "Aldo&#39;s only hope of transcending his station, and cloning a piece of his soul somewhere new is both his triumph and his terrible crime. The Fortress at the End of Time is a new science fiction novel from Joe M. McDermott."
  },
  {
    title: "The Grace of Kings",
    authorLast: "Liu",
    authorFirst: "Ken",
    isbn: "1481424270",
    rating: 3.74,
    length: 623,
    source: "Verge & io9",
    note:
      "an ambitious, astonishing, and sublime work, one that both exemplifies and diverges from what one might think of when it comes to epic fantasy. It should rank amongst the genre's best works.",
    series: "Dandelion Dynasty #1",
    textSnippet:
      "Becoming the best of friends after a series of adventures fighting against vast conscripted armies, a bandit and a duke&#39;s son become the rival leaders of separate factions with very different ideas about justice and politics."
  },
  {
    title: "Dark Run",
    authorLast: "Brooks",
    authorFirst: "Mike",
    isbn: "0091956641",
    rating: 3.61,
    length: 432,
    source: "Verge",
    note:
      "Take a starship, crew it with people who have questionable paths, introduce a sponsor with a major vendetta, then send them out on what’s most likely a suicide mission to Earth",
    series: "Keiko #1",
    textSnippet:
      "The Keiko is a ship of smugglers, soldiers of fortune and adventurers, travelling Earthâe(tm)s colony planets searching for the next job."
  },
  {
    title: "Aurora",
    authorLast: "Robinson",
    authorFirst: "Kim Stanley",
    isbn: "0316098108",
    rating: 3.73,
    length: 466,
    source: "Warren Ellis & aworkinglibrary",
    note:
      "mainly a realistic take on how humanity can travel to other planets, Robinson takes a hard look at what settling on a new world might look like when such a ship would arrive: incredibly difficult.",
    textSnippet:
      "Brilliantly imagined and beautifully told, it is the work of a writer at the height of his powers. Our voyage from Earth began generations ago. Now, we approach our new home. AURORA."
  },
  {
    title: "Spindrift",
    authorLast: "Steele",
    authorFirst: "Allen M.",
    isbn: "0441015824",
    rating: 3.83,
    length: 368,
    note:
      "set in Steele's Coyote universe, but is not a part of the core trilogy. It runs paralell to it.",
    series: "Coyote #4",
    textSnippet:
      "More than fifty years after a European starship goes missing while investigating an unidentified space object, the expedition&#39;s three surviving members return to Earth without having aged and possessing claims about an extraterrestrial race ..."
  },
  {
    title: "Arkwright",
    authorLast: "Steele",
    authorFirst: "Allen M.",
    isbn: "0765382156",
    rating: 3.66,
    length: 336,
    note:
      "Another great book from him is Arkwright, which portrays how humans could set up an interstellar ship and colonize a distant planet.",
    textSnippet:
      "Nathan Arkwright is a famous science fiction writer who is convinced that humanity cannot survive on Earth. His Arkwright Foundation dedicates itself to creating a colony in deep space."
  },
  {
    title: "Roadside Picnic",
    authorLast: "Strugatsky",
    authorFirst: "Arkady",
    isbn: "0575070536",
    rating: 4.21,
    length: 145,
    purchased: true,
    note:
      "S.T.A.L.K.E.R. is based on the novella Roadside Picnic, by the Strugatsky brothers, and its film adaptation, Andrei Tarkovsky’s Stalker.",
    textSnippet:
      "Red Schuhart is a stalker, one of those strange misfits who are compelled by some unknown force to venture illegally into the Zone and, in spite of the extreme danger, collect the mysterious artefacts that the alien visitors left scattered ..."
  },
  {
    title: "The Scar",
    authorLast: "Miéville",
    authorFirst: "China",
    isbn: "0345460014",
    rating: 4.16,
    length: 578,
    note:
      "China Mieville’s Bas Lag is one of my favorite fictional worlds. Unlike traditional nations, Armada is a nation made up of boats tied together. Its nine boroughs are ruled by different factions, all quietly vying for control over Armada itself.",
    series: "Bas-Lag #2",
    textSnippet:
      "En route to the fledgling colony of New Crobuzon, a ship carrying prisoners, slaves, and a few travelers, each with their own reason for leaving the city, is attacked by pirates, who bring the surviving passengers to a strange floating city ..."
  },
  {
    title: "Chasm City",
    authorLast: "Reynolds",
    authorFirst: "Alastair",
    isbn: "0441010644",
    rating: 4.13,
    length: 694,
    note:
      "If you’re a fan of the Mass Effect universe, you’re a fan of the Revelation Space world, you just don’t know it yet. Everything Mass Effect did, Revelation Space did better, and I say this as a huge fan of both series.",
    textSnippet:
      "Tanner Mirabel ventures through the dark underside of Chasm City, a once utopian city overrun by a vicious virus known as the Melding Plague, in pursuit of a lowlife postmortal and comes face to face with a centuries-old atrocity that ..."
  },
  {
    title: "The Passage",
    authorLast: "Cronin",
    authorFirst: "Justin",
    isbn: "0345504968",
    rating: 4.04,
    length: 766,
    source: "Mrs. Stockman",
    series: "Passage #1",
    textSnippet:
      "A security breach at a secret U.S. government facility unleashes the monstrous product of a chilling military experiment that only six-year-old orphan Amy Harper Bellafonte can stop."
  },
  {
    title: "Echopraxia",
    authorLast: "Watts",
    authorFirst: "Peter",
    isbn: "076532802X",
    rating: 3.89,
    length: 384,
    prioritize: true,
    series: "Firefall #2",
    textSnippet:
      "A follow-up to the Hugo Award-nominated Blindsight is set in a 22nd-century world transformed by scientific evangelicals, supernatural beings and ghosts, where defunct biologist Daniel Bruks becomes trapped on a spaceship destined to make ..."
  },
  {
    title: "Transition",
    authorLast: "Banks",
    authorFirst: "Iain M.",
    isbn: "0316071986",
    rating: 3.85,
    length: 404,
    prioritize: true,
    source: "io9",
    note:
      "Iain M. Banks' latest novel Transition, in bookstores this week, will jelly your brains in brilliant weirdness. Banks turns political world-building on its head in this exciting tale of an Earth-based multiverse in turmoil, where dimension-hopping assassins jockey for power.",
    textSnippet:
      "There is a world that hangs suspended between triumph and catastrophe, between the dismantling of the Wall and the fall of the Twin Towers, frozen in the shadow of suicide terrorism and global financial collapse."
  },
  {
    title: "Charmed Life",
    authorLast: "Jones",
    authorFirst: "Diana Wynne",
    isbn: "0007255292",
    rating: 3.95,
    length: 252,
    series: "Chrestomanci #1",
    textSnippet:
      "Glorious new rejacket of a Diana Wynne Jones classic award-winning favourite, featuring Chrestomanci - now a book with extra bits!"
  },
  {
    title: "The Quantum Thief",
    authorLast: "Rajaneimi",
    authorFirst: "Hannu",
    isbn: "0575088877",
    rating: 3.84,
    length: 336,
    purchased: true,
    source: "Warren Ellis",
    series: "Jean le Flambeur #1",
    textSnippet:
      "The Quantum Thief is a dazzling hard SF novel set in the solar system of the far future - a heist novel peopled by bizarre post-humans but powered by very human motives of betrayal, revenge and jealousy. It is a stunning debut."
  },
  {
    title: "Tiamat's Wrath",
    authorLast: "Corey",
    authorFirst: "James S.A.",
    isbn: "0316332879",
    rating: 0,
    length: 608,
    prioritize: true,
    series: "Expanse #8",
    textSnippet:
      "The eighth novel in James S. A. Corey&#39;s New York Times bestselling Expanse series--now a major television series."
  },
  {
    title: "Persepolis Rising",
    authorLast: "Corey",
    authorFirst: "James S.A.",
    isbn: "0316332828",
    rating: 4.35,
    length: 608,
    prioritize: true,
    series: "Expanse #7",
    textSnippet:
      "The seventh novel in James S. A. Corey&#39;s New York Times bestselling Expanse series--now a major television series."
  },
  {
    title: "Strange Dogs",
    authorLast: "Corey",
    authorFirst: "James S.A.",
    isbn: "0316217573",
    rating: 3.9,
    length: 112,
    prioritize: true,
    series: "Expanse #6.5",
    textSnippet:
      "A novella set in the hard-scrabble world of the Expanse, Strange Dogs deepens James S. A. Corey&#39;s New York Times bestselling series."
  },
  {
    title: "Babylon's Ashes",
    authorLast: "Corey",
    authorFirst: "James S.A.",
    isbn: "0356504263",
    rating: 4.19,
    length: 538,
    prioritize: true,
    series: "Expanse #6",
    textSnippet:
      "The sixth book in the New York Times bestselling Expanse series."
  },
  {
    title: "The Vital Abyss",
    authorLast: "Corey",
    authorFirst: "James S.A.",
    isbn: "0316217565",
    rating: 3.85,
    length: 75,
    prioritize: true,
    series: "Expanse #5.5",
    textSnippet:
      "The only company they have is each other and the Belters who guard them. The only stories they know are the triumphs and crimes that brought them there. The only future they see is an empty life in an enormous room."
  },
  {
    title: "Nemesis Games",
    authorLast: "Corey",
    authorFirst: "James S.A.",
    isbn: "0356504220",
    rating: 4.37,
    length: 536,
    prioritize: true,
    series: "Expanse #5",
    textSnippet:
      "And as a new human order is struggling to be born in blood and fire, James Holden and the crew of the Rocinante must struggle to survive and get back to the only home they have left."
  },
  {
    title: "Cibola Burn",
    authorLast: "Corey",
    authorFirst: "James S.A.",
    isbn: "031621762X",
    rating: 4.13,
    length: 581,
    prioritize: true,
    series: "Expanse #4",
    textSnippet:
      "ENTER A NEW FRONTIER. An empty apartment, a missing family, that&#39;s creepy. But this is like finding a military base with no one on it. Fighters and tanks idling on the runway with no drivers. This is bad juju."
  },
  {
    title: "The Inheritance Trilogy",
    authorLast: "Jemisin",
    authorFirst: "N.K.",
    isbn: "0316334006",
    rating: 4.15,
    length: 1442,
    source: "twitter",
    note: "WOC author & characters, seduces a god",
    series: "Inheritance #1-3.5",
    textSnippet:
      "In this omnibus edition of N.K. Jemisin&#39;s brilliantly original award-winning fantasy series, a young woman becomes entangled in a power struggle of mythic proportions."
  },
  {
    title: "The Hundred Thousand Kingdoms",
    authorLast: "Jemisin",
    authorFirst: "N.K.",
    isbn: "0316043923",
    rating: 3.82,
    length: 427,
    source: "twitter",
    note: "WOC author & characters, seduces a god",
    series: "Inheritance #1",
    textSnippet:
      "There, to her shock, Yeine is named an heiress to the king. But the throne of the Hundred Thousand Kingdoms is not easily won, and Yeine is thrust into a vicious power struggle with cousins she never knew she had."
  },
  {
    title: "Station Eleven",
    authorLast: "Mandel",
    authorFirst: "Emily St. John",
    isbn: "0385353308",
    rating: 4.02,
    length: 336,
    source: "adactio",
    textSnippet:
      "The sudden death of a Hollywood actor during a production of King Lear marks the beginning of the world&#39;s dissolution, in a story told at various past and future times from the perspectives of the actor and four of his associates."
  },
  {
    title: "The Three-Body Problem",
    authorLast: "Liu",
    authorFirst: "Cixin",
    isbn: "0765377063",
    rating: 4.03,
    length: 400,
    source: "Sara Chipps",
    series: "Remembrance of Earth's Past #1",
    textSnippet:
      "Set against the backdrop of China&#39;s Cultural Revolution, a secret military project&#39;s signal is received by an alien civilization on the brink of destruction, which plans to invade Earth; meanwhile, on Earth, different camps start forming, ..."
  },
  {
    title: "The Goblin Emperor",
    authorLast: "Addison",
    authorFirst: "Katherine",
    isbn: "076532699X",
    rating: 4.04,
    length: 446,
    source: "Kara",
    note: "Female author",
    textSnippet:
      "Reluctantly elevated to the throne when his father and brothers are killed in a suspicious accident, an exiled half-goblin is rapidly overwhelmed by ambitious sycophants, imperial burdens and dangerous plots while searching for friendship ..."
  },
  {
    title: "Stand on Zanzibar",
    authorLast: "Brunner",
    authorFirst: "John",
    isbn: "1857988361",
    rating: 3.97,
    length: 672,
    source: "Warren Ellis",
    textSnippet:
      "In a society populated by mass-marketed psychedelics and eugenics, where everyone was struggling for life, Donald Hogan was a mild-mannered student, a dilettante intellectual - at least that&#39;s what everybody was supposed to think."
  },
  {
    title: "The Water Knife",
    authorLast: "Bacigalupi",
    authorFirst: "Paolo",
    isbn: "0356501744",
    rating: 3.83,
    length: 371,
    source: "Warren Ellis",
    textSnippet:
      "When rumours of a game-changing water source surface, Las Vegas dispatches elite water knife Angel Velasquez to Phoenix to investigate"
  },
  {
    title: "Nexus",
    authorLast: "Naam",
    authorFirst: "Ramez",
    isbn: "0857665502",
    rating: 4.05,
    length: 460,
    source: "Gabe",
    series: "Nexus #1",
    textSnippet:
      "Kade Lane is a young scientist of the future who has found a way to make Nexus, a experimental drug that allows humans to connect minds, to be introduced with apps that can expand human capabilities, as police, government forces, and ..."
  },
  {
    title: "The Windup Girl",
    authorLast: "Bacigalupi",
    authorFirst: "Paolo",
    isbn: "1597801577",
    rating: 3.74,
    length: 359,
    source: "Lev Grossman",
    note: "Recommended by Lev Grossman in Time, and Nigel",
    textSnippet:
      "Living in a future where food is scarce, Anderson Lake tries to find ways to exploit this need, as he comes into conflict with Jaidee, an official of the Environmental Ministry, and encounters Emiko, a engineered windup girl who has been ..."
  },
  {
    title: "Red Planet Blues",
    authorLast: "Sawyer",
    authorFirst: "Robert J.",
    isbn: "0425256820",
    rating: 3.5,
    length: 368,
    source: "Gabe",
    textSnippet:
      "Working in New Klondike in the Martian frontier, Alex Lomax discovers clues to who murdered the men that first discovered life on mars decades earlier, and puts himself in mortal danger after also uncovering a treasure trove of rare Martian ..."
  },
  {
    title: "Pastwatch: The Redemption of Christopher Columbus",
    authorLast: "Card",
    authorFirst: "Orson Scott",
    isbn: "0812508645",
    rating: 3.96,
    length: 402,
    textSnippet:
      "In one of the most powerful and thought-provoking novels of his remarkable career, Orson Scott Card interweaves a compelling portrait of Christopher Columbus with the story of a future scientist who believes she can alter human history from ..."
  },
  {
    title: "Seed",
    authorLast: "Ziegler",
    authorFirst: "Rob",
    isbn: "1597803251",
    rating: 3.21,
    length: 341,
    source: "io9",
    textSnippet:
      "In a dystopian 22nd-century America where Satori, a hyper-intelliigent living city, controls the production of climate-resistant seeds--the only food available to Americans--Secret Service agent Sienna Doss is tasked with finding a rogue ..."
  },
  {
    title: "The Final Empire",
    authorLast: "Sanderson",
    authorFirst: "Brandon",
    isbn: "076531178X",
    rating: 4.43,
    length: 541,
    source: "Pat Rothfuss",
    note:
      "Sanderson has now been added to a very short list. Specifically, the list authors I wish to kill so that I might eat their livers and thereby gain their power.",
    series: "Mistborn #1",
    textSnippet:
      "Experiencing an epiphany within the most daunting prison of the monstrous Lord Ruler, half-Skaa Kelsier finds himself taking on the powers of a Mistborn, and teams up with ragged orphan Vin in a desperate plot to save their world."
  },
  {
    title: "The Black Company",
    authorLast: "Cook",
    authorFirst: "Glen",
    isbn: "0812521390",
    rating: 3.96,
    length: 319,
    purchased: true,
    source: "Tor Book of the Month",
    note:
      "A landmark of grimdark fantasy, starting a trend that continues with Game of Thrones today.",
    series: "Chronicles of the Black Company #1",
    textSnippet:
      "The tough mercenaries of the Black Company risk their lives and their souls as they set out to find the White Rose, a mystical figure who embodies the very essence of good."
  },
  {
    title: "The Red Threads of Fortune",
    authorLast: "Yang",
    authorFirst: "JY",
    isbn: "0765395398",
    rating: 4.06,
    length: 213,
    series: "Tensorate #2",
    textSnippet:
      "The Red Threads of Fortune is one of a pair of unique, standalone introductions to JY Yang's Tensorate Series, which Kate Elliott calls 'effortlessly fascinating.'"
  }
];

export default books;
