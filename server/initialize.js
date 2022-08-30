

export default async (models) => {
    const locationList = [
        {
            name: "Cat Paradise",
            city: "Milan"
        },
        {
            name: "Cat City",
            city: "Rome"
        }
    ]
    const location0 = await models.Location.create(locationList[0])
    const location1 = await models.Location.create(locationList[1])
    const catList = [
        {
            name: "Cat 1",
            breed: "Siberian",
            description: "Details about cat 1",
            img: "https://fs.i3lab.group/hypermedia/cats/siberian.jpg",
            locationId: location0.id
        },
        {
            name: "Cat 2",
            breed: "Birman",
            description: "Details about cat 2",
            img: "https://fs.i3lab.group/hypermedia/cats/birman.jpg",
            locationId: location0.id
        },
        {
            name: "Cat 3",
            breed: "Bombay",
            description: "Details about cat 3",
            img: "https://fs.i3lab.group/hypermedia/cats/bombay.jpg",
            locationId: location0.id
        },
        {
            name: "Cat 4",
            breed: "Calico",
            description: "Details about cat 4",
            img: "https://fs.i3lab.group/hypermedia/cats/calico.jpg",
            locationId: location1.id
        },
        {
            name: "Cat 5",
            breed: "Maine Coon",
            description: "Details about cat 5",
            img: "https://fs.i3lab.group/hypermedia/cats/maine-coon.jpg",
            locationId: location1.id
        },
    ]
    await models.Cat.bulkCreate(catList)

    const POIs = [
        {
            imgPathMain: "https://img.itinari.com/pages/images/original/45efadaf-72bc-47a6-979a-b12bf1849cf7-istock-458117473.jpg?ch=DPR&dpr=1.25&w=1600&s=9c2481e70bf928dc4ee8c79cdb62f471",
            descriptionMain: "Italy is reputed as a country that enjoys and celebrates the wonderful things in life - food, drinks, friends and the obvious dance! One of the most recognized dance types is the traditional dance of southern Italy, called tarantella, which is characterized by fast beats and the accompaniment of a tambourine. The word itself is the name of a poisonous which is common in southern Italy. According to ancient folk belief, spider bites once caused a crisis of violent psychopathy.",
            heading: "Puglia Dance and Tarantula Spider Night",
            address: "Florence-Pitti Palace",
            hours: "2 Sep - 4 Sep",
            cost: "$14",
            imgPathText: "https://img.itinari.com/pages/images/original/45efadaf-72bc-47a6-979a-b12bf1849cf7-istock-458117473.jpg?ch=DPR&dpr=1.25&w=1600&s=9c2481e70bf928dc4ee8c79cdb62f471 ",
            imgPathMap: "https://www.google.com/maps/d/thumbnail?mid=10VmHW_IKbqVsLo3GSftdvHCyAJM&hl=en",
            category: "Dance",
            url: "https://www.itinari.com/zh/apulian-dances-and-the-night-of-the-tarantula-xjaf",
            
        },
        {
            imgPathMain: "https://www.festivaldellavalleditria.it/wp-content/uploads/2022/04/xBANNER-415X250_202211.jpg.pagespeed.ic.ZG598FW7Pw.webp",
            descriptionMain: "Music by Bellini, Donizetti, Rossini, Liszt Programme: VINCENZO BELLINI Vanne, o rosa fortunata GAETANO DONIZETTI",
            heading: "Pretty Yende",
            address: "Florence-Pitti Palace",
            hours: "6 Sep - 8 Sep",
            cost: "Free",
            imgPathText: "https://www.festivaldellavalleditria.it/wp-content/uploads/2022/04/xBANNER-415X250_202211.jpg.pagespeed.ic.ZG598FW7Pw.webp",
            imgPathMap: "https://i.stack.imgur.com/coL96.png",
            category: "Dance",
            url: "https://www.c.it/en/spettacolo/pretty-yende",            
        },
        {
            imgPathMain: "https://www.festivaldellavalleditria.it/wp-content/uploads/2022/04/xBANNER-415X250_202212.jpg.pagespeed.ic.FjALU91zgD.webp",
            descriptionMain: "Music by Cilea, De Curtis, Puccini, Leoncavallo, Arditi, Verdi, Falvo, Giordano, Arlen, Mascagni, Catalani, Cardillo Programme: FRANCESCO CILEA “Io son l’umile ancella” from Adriana Lecouvreur ERNESTO DE CURTIS Non ti scordar di me  GIACOMO PUCCINI “O mio babbino caro” from Gianni Schicchi RUGGERO LEONCAVALLO",
            heading: "Anna Pirozzi",
            address: "Florence-Pitti Palace",
            hours: "6 Sep - 9 Sep",
            cost: "Free",
            imgPathText: "https://www.festivaldellavalleditria.it/wp-content/uploads/2022/04/xBANNER-415X250_202212.jpg.pagespeed.ic.FjALU91zgD.webp",
            imgPathMap: "https://i.stack.imgur.com/coL96.png",
            category: "Music",
            url: "https://www.festivaldellavalleditria.it/en/spettacolo/anna-pirozzi",
            
        },
        {
           imgPathMain: "https://www.festivaldellavalleditria.it/wp-content/uploads/2022/05/xBANNER-415X250_2022_bassifondi.jpg.pagespeed.ic.mcshdGF83S.webp",
            descriptionMain: "Music by Foscarini, Kapsberger, Marchetti Romano, Piccinini, De Murcia, Sanz, Valdambrini Romano, Kircher Programme:ALFABETO FALSO Quando le lettere nascondono qualcosa GIOVANNI PAOLO FOSCARINI “Gagliarda francese”, “Passacaglia sopra la O”, “Aria di Firenze per la A e C” from Li cinque libri della chitarra alla spagnola HIERONIMUS KAPSBERGER",
            heading: "Il canto degli ulivi | I Bassifondi",
            address: "Florence-Pitti Palace",
            hours: "1 Sep - 9 Sep",
            cost: "Free",
            imgPathText: "https://www.festivaldellavalleditria.it/wp-content/uploads/2022/05/xBANNER-415X250_2022_bassifondi.jpg.pagespeed.ic.mcshdGF83S.webp",
            imgPathMap: "https://i.stack.imgur.com/coL96.png",
            category: "Music",
            url: "https://www.festivaldellavalleditria.it/en/spettacolo/il-canto-degli-ulivi-i-bassifondi",
            
        },
        {
           imgPathMain: "https://www.festivaldellavalleditria.it/wp-content/uploads/2022/04/xBANNER-415X250_20229.jpg.pagespeed.ic.HCdeoDqzpc.webp",
            descriptionMain: "Music by Giuliani, Doisy, Sor, Schubert, Mertz, Rossini Programme: MAURO GIULIANI 6 Cavatine, op. 39 CHARLES DOISY Romances pour voix et guitar FERNANDO SOR Caprice op. 50, “Le calme” FRANZ SCHUBERT “Der Wanderer” and “Ständchen” from Schwanengesang D957 JOHANN KASPAR MERTZ",
            heading: "Il canto degli ulivi | Giulia Semenzato",
            address: "Florence-Pitti Palace",
            hours: "10 Sep - 19 Sep",
            cost: "Free",
            imgPathText: "https://www.festivaldellavalleditria.it/wp-content/uploads/2022/04/xBANNER-415X250_20229.jpg.pagespeed.ic.HCdeoDqzpc.webp",
            imgPathMap: "https://i.stack.imgur.com/coL96.png",
            category: "Music",
            url: "https://www.festivaldellavalleditria.it/en/spettacolo/il-canto-degli-ulivi-giulia-semenzato",
            
        },
        {
            imgPathMain: "https://www.festivaldellavalleditria.it/wp-content/uploads/2022/04/xBANNER-415X250_20226.jpg.pagespeed.ic.BxSn2dC9ug.webp",
            descriptionMain: "Music by Giacomo Puccini Locandina: Director and film adaptation Damiano Michieletto (ITA, 2021 – 75 minuti) Conductor Stefano Montanari Music played by Orchestra Teatro Comunale di Bologna cenography Paolo Fantin",
            heading: "Gianni Schicchi | Film",
            address: "Montreal-Montreal Park",
            hours: "20 Sep - 29 Sep",
            cost: "Free",
            imgPathText: "https://www.festivaldellavalleditria.it/wp-content/uploads/2022/04/xBANNER-415X250_20226.jpg.pagespeed.ic.BxSn2dC9ug.webp",
            imgPathMap: "https://i.stack.imgur.com/coL96.png",
            category: "Music",
            url: "https://www.festivaldellavalleditria.it/en/spettacolo/gianni-schicchi-film",
            
        },
        {
            imgPathMain: "https://giornaledelladanza.com/wp-content/uploads/IMG_6922-3-BOLERO-1.jpg",
            descriptionMain: "It is called Magic of a star a production by Susanna Beltrami.Just in homage to her long career Luciana Savignano tells her audience also proposing in video some precious memorabilia of her career, which she herself will comment live.",
            heading: "Magic of a Star",
            address: "Madrid-El Retiro Park",
            hours: "7 Sep - 8 Sep",
            cost: "Free",
            imgPathText: "https://giornaledelladanza.com/wp-content/uploads/IMG_6922-3-BOLERO-1.jpg",
            imgPathMap: "https://i.stack.imgur.com/coL96.png",
            category: "Theater",
            url: "https://giornaledelladanza.com/luciana-savignano-magia-di-una-stella/",
            
        },
        {
            imgPathMain: "https://www.festivaldellavalleditria.it/wp-content/uploads/2022/04/xBANNER-415X250_20227.jpg.pagespeed.ic.-Wzjkzu1yN.webp",
            descriptionMain: "Le pellicole, del 1915, Carmen di DeMille (protagonista la diva del Metropolitan Opera Geraldine Farrar) e Burlesque on Carmen di e con Charlie Chaplin (che fa una parodia del lavoro di DeMille) vengono proiettate in versione restaurata e con le colonne sonore eseguite dal vivo dall’Orchestra della Magna Grecia diretta da Timothy Brock.",
            heading: "Silent Carmen",
            address: "Venice-St. Mark's Square",
            hours: "23 Sep - 26 Sep",
            cost: "Free",
            imgPathText: "https://www.festivaldellavalleditria.it/wp-content/uploads/2022/04/xBANNER-415X250_20227.jpg.pagespeed.ic.-Wzjkzu1yN.webp",
            imgPathMap: "https://i.stack.imgur.com/coL96.png",
            category: "Theater",
            url: "https://www.festivaldellavalleditria.it/en/spettacolo/silent-carmen-film",
            
        },
        {
           imgPathMain: "https://www.puccinifestival.it/wp-content/uploads/2022/08/madama_butterfly-1.jpg",
            descriptionMain: "Manu Lalli’s ecological message is visually rendered with a beautiful forest of real trees on stage. Green trees in the first act that become dry and arid in the second and third, a clear message of condemnation against gender violence and the violence that man perpetrates every day against nature. Alberto Veronesi, refined interpreter of the “Puccini” style, conducts the Puccini Festival Orchestra and Chorus.",
            heading: "MADAMA BUTTERFLY",
            address: "Venice-St. Mark's Square",
            hours: "20 Sep - 26 Sep",
            cost: "Free",
            imgPathText: "https://www.puccinifestival.it/wp-content/uploads/2022/08/madama_butterfly-3.jpg",
            imgPathMap: "https://i.stack.imgur.com/coL96.png",
            category: "Opera",
            url: "https://www.puccinifestival.it/en/madama_butterfly_2022/",
            
        },
        {
            imgPathMain: "https://www.puccinifestival.it/wp-content/uploads/2022/08/tosca-2.jpg",
            descriptionMain: "osca is undoubtedly Puccini's most dramatic opera, cruelty and sadism provide the backdrop for the story of love and death set in Rome in the 1800s.At the Puccini Festival 2022 it will be presented in a production by Pier Luigi Pizzi, with Enrico Calesso on the podium of the Puccini Festival Orchestra.Pizzi, who also designed the sets and costumes,  makes a temporal shift from the Rome of the Napoleonic era to the Italy of the late 1930s.",
            heading: "TOSCA",
            address: "London-London-Hyde Park",
            hours: "6 Sep - 7 Sep",
            cost: "Free",
            imgPathText: "https://www.puccinifestival.it/wp-content/uploads/2022/08/tosca-3.jpg",
            imgPathMap: "https://i.stack.imgur.com/coL96.png",
            category: "Opera",
            url: "https://www.puccinifestival.it/en/tosca_2022/",
            
        },
      
    ]
    await models.POI.bulkCreate(POIs)

    const Event = [
    ]
    await models.Event.bulkCreate(Event)

    const Service = [
         {
            heading: "Bixi",
            location: "Available through the App on iPhone and Android",
            hours: "24/7",
            url: "https://bixi.com/",
            type: "Transportation in the City",
            Neighbourhood: "East",
        },
        {
            heading: "Exo",
            location: "700 rue de la Gauchetière, Montreal, Quebec, Canada",
            hours: "6 AM - 8:30 PM",
            url: "https://exo.quebec/en",
            type: "Transportation in the City",
            Neighbourhood: "East",
        },
        {
            heading: "Metro",
            location: "800, rue de la Gauchetiere Ouest; Montreal, Quebec; H5A 1J6",
            hours: "5:30 AM to 1 AM",
            url: "https://www.stm.info/en/info/networks/metro",
            type: "Transportation in the City",
            Neighbourhood: "South",
        },
        {
            heading: "Uber",
            location: "Available through the App on iPhone and Android",
            hours: "24/7",
            url: "https://www.uber.com/global/en/cities/montreal/",
            type: "Transportation in the City",
            Neighbourhood: "West",
        },
        {
            heading: "Montreal Scooter",
            location: "520 Rue Berri\nMontréal, QC H2Y 1B4",
            hours: "10:30 AM - 6:30 PM",
            url: "https://www.montrealscooter.com/",
            type: "Transportation in the City",
            Neighbourhood: "East",
        },
        {
            heading: "BlablaCar",
            location: "Available through the App on iPhone and Android",
            hours: "24/7",
            url: "https://www.uber.com/global/en/cities/montreal/",
            type: "Transportation in the City",
            Neighbourhood: "South",
        },
        {
            heading: "Les Amis de la Montagne",
            location: "1260, chemin Remembrance\nMontréal (Québec) H3H 1A2",
            hours: "9:30 AM - 4:30 PM",
            url: "https://www.lemontroyal.qc.ca/en/mount-royal-park-visitor-services",
            type: "Outdoor Fun",
            Neighbourhood: "East",
        },
        {
            heading: "Quantum e-bikes",
            location: "115 Atwater Avenue Montreal, QC H3J 2Z8",
            hours: "10 AM - 5 PM",
            url: "https://www.quantumebikes.com/en/",
            type: "Outdoor Fun",
            Neighbourhood: "South",
        },
        {
            heading: "Patin Patin",
            location: "Pavillon Bonsecours\n364 de la Commune East street\nMontreal (Quebec) H2Y 1J3",
            hours: "9 AM - 10 PM",
            url: "https://www.patinpatin.ca/en/old-port-montreal-skating-rink/",
            type: "Outdoor Fun",
            Neighbourhood: "West",
        },
        {
            heading: "Kids Help Phone",
            location: "Available by telephone at 1-800-668-6868",
            hours: "24/7",
            url: "https://kidshelpphone.ca/",
            type: "Safety",
            Neighbourhood: "East",
        },
        {
            heading: "Suicide Action Montreal",
            location: "Available by telephone +1 866-277-3553",
            hours: "24/7",
            url: "https://suicideactionmontreal.org/en/",
            type: "Safety",
            Neighbourhood: "South",
        },
        {
            heading: "Nightline",
            location: "Available by telephone at 514-398-6246",
            hours: "6 PM-3 AM",
            url: "https://nightline.ssmu.ca/",
            type: "Safety",
            Neighbourhood: "West",
        },
        {
            heading: "Walksafe",
            location: "3480 Mc Tavish St (Room 433)\nMontreal, Quebec H3A 0E7",
            hours: " 9 PM - 3 AM",
            url: "https://walksafe.ssmu.ca/",
            type: "Safety",
            Neighbourhood: "East",
        },
        {
            heading: "Gare d'autocars de Montréal",
            location: "1717 Berri Street\nMontréal, QC\nH2L 4E9",
            hours: "24/7",
            url: "https://www.gamtl.com/en/bienvenue/",
            type: "Getting to Montreal",
            Neighbourhood: "East",
        },
        {
            heading: "VIA Rail Canada",
            location: "895 De La Gauchetière Street West\nMontréal, QC\nH3B 4G1",
            hours: "7 AM - 11 PM",
            url: "https://www.viarail.ca/en",
            type: "Getting to Montreal",
            Neighbourhood: "South",
        },
        {
            heading: "Montréal-Trudeau International Airport",
            location: "YUL Montréal-Trudeau International Airport\nDorval, QC\nH4Y 1H1",
            hours: "24/7",
            url: "https://www.admtl.com/en",
            type: "Getting to Montreal",
            Neighbourhood: "West",
        },
        {
            heading: "Grand Quay - Cruise Terminal",
            location: "Grand Quai du Port de Montréal\nOld Port of Montréal\nMontréal, QC\nH2Y 4B2",
            hours: "11 AM - 7 PM",
            url: "https://www.port-montreal.com/en/cruises",
            type: "Getting to Montreal",
            Neighbourhood: "East",
        },
        {
            heading: "Montréal Infotouriste Centre",
            location: "1255 Peel Street, Suite 100",
            hours: "9 AM - 5 PM",
            url: "https://www.bonjourquebec.com/en-ca",
            type: "Tourism Infopoints",
            Neighbourhood: "South",
        },
        {
            heading: "Tourist Welcome Office in Old Montréal",
            location: "174 Notre-Dame Street East",
            hours: "10 AM - 6 PM",
            url: "https://www.bonjourquebec.com/en-ca",
            type: "Tourism Infopoints",
            Neighbourhood: "West",
        },
        {
            heading: "Montréal Professional Tourist Guides Association",
            location: "C.P. 182, succursale Place d’Armes\nMontréal (Québec)  H2Y 3J4\nCANADA",
            hours: "Hours vary by private guide.",
            url: "https://www.apgt.ca/en/home/",
            type: "Tourism Infopoints",
            Neighbourhood: "East",
        },
        {
            heading: "Firefighting Services",
            location: "Available by telephone at 911",
            hours: "24/7",
            url: "https://spvm.qc.ca/en/Fiches/Details/911",
            type: "Emergency Services",
            Neighbourhood: "South",
        },
        {
            heading: "Ambulance",
            location: "Available by telephone at 911",
            hours: "24/7",
            url: "https://spvm.qc.ca/en/Fiches/Details/911",
            type: "Emergency Services",
            Neighbourhood: "West",
        },
        {
            heading: "Police",
            location: "Available by telephone at 911",
            hours: "24/7",
            url: "https://spvm.qc.ca/en/Fiches/Details/911",
            type: "Emergency Services",
            Neighbourhood: "East",
        },
        {
            heading: "Poison Control Centre",
            location: "1270 Chemin Ste-Foy\nPavillon Jeffrey Hale, 4ème étage\nQuébec, QC G1S 2M4",
            hours: "24/7",
            url: "https://infopoison.ca/centre/centre-anti-poison-du-quebec/",
            type: "Emergency Services",
            Neighbourhood: "West",
        },
        {
            heading: "Ritz-Carlton Montreal",
            location: "1228 Sherbrooke St. West\nMontréal, H3G 1H6 Canada",
            hours: "24/7",
            url: "https://www.ritzcarlton.com/en/hotels/canada/montreal",
            type: "Top Hotels",
            Neighbourhood: "South",
        },
        {
            heading: "Four Seasons Hotel Montreal",
            location: "1440 Rue de la Montagne, Montreal QC H3G 1Z5",
            hours: "24/7",
            url: "https://www.fourseasons.com/montreal/",
            type: "Top Hotels",
            Neighbourhood: "East",
        },

        {
            heading: "Alternative Hostel of Old Montreal",
            location: "358, rue Saint-Pierre\nMontréal, Québec, Canada\nH2Y 2M1",
            hours: "24/7",
            url: "http://www.auberge-alternative.qc.ca/en_US/",
            type: "Top Hotels",
            Neighbourhood: "South",
        },

        {
            heading: "Queen Elizabeth Hotel Fairmont",
            location: "900 Rene Levesque Blvd. W, Montreal - Quebec H3B 4A5",
            hours: "24/7",
            url: "https://www.fairmont.com/queen-elizabeth-montreal/",
            type: "Top Hotels",
            Neighbourhood: "West",
        },

        {
            heading: "Montréal General Hospital",
            location: "1650 Cedar Ave, Montreal, Quebec H3G 1A4, Canada",
            hours: "24/7",
            url: "https://muhc.ca/",
            type: "Hospitals",
            Neighbourhood: "East",
        },
        {
            heading: "Royal Victoria Hospital",
            location: "1001 Decarie Blvd, Montreal, Quebec H4A 3J1, Canada",
            hours: "24/7",
            url: "https://muhc.ca/glen-site",
            type: "Hospitals",
            Neighbourhood: "West",
        },
        {
            heading: "St. Mary's Hospital",
            location: "3830 Av. Lacombe, Montréal, QC H3T 1M5, Canada",
            hours: "24/7",
            url: "https://www.smhc.qc.ca/en/",
            type: "Hospitals",
            Neighbourhood: "South",
        },
        {
            heading: "CHUM",
            location: "1051 Rue Sanguinet, Montréal, QC H2X 3E4, Canada",
            hours: "24/7",
            url: "https://www.chumontreal.qc.ca/joindre-le-chum",
            type: "Hospitals",
            Neighbourhood: "East",
        },
        {
            heading: "Bank of Montreal",
            location: "119, rue Saint-Jacques\nMontreal, Quebec\nH2Y 1L6",
            hours: "9:30 AM - 5 PM",
            url: "https://www.bmo.com/main/personal",
            type: "Banks",
            Neighbourhood: "South",
        },
        {
            heading: "National Bank of Canada",
            location: "Gare Centrale, 895 Rue De La Gauchetière O bureau 90-251, Montréal, QC H3B 4G1, Canada",
            hours: "9 AM - 4 PM",
            url: "https://www.nbc.ca/content/bnc/en/accueil/particuliers.html",
            type: "Banks",
            Neighbourhood: "West",
        },
        {
            heading: "Toronto Dominion  Canada Trust",
            location: "800 René-Lévesque Blvd W, Montreal, Quebec H3B 1X9, Canada",
            hours: "9 AM - 6 PM",
            url: "https://www.td.com/ca/en/personal-banking/",
            type: "Banks",
            Neighbourhood: "East",
        },
        {
            heading: "Desjardins",
            location: "South Tower, 1 Complexe Desjardins, Montréal, QC H5B 1B2, Canada",
            hours: "8 AM - 6 PM",
            url: "https://www.desjardins.com/",
            type: "Banks",
            Neighbourhood: "South",
        },
        {
            heading: "P$ Service Mobile",
            location: "Available through the App on iPhone and Android",
            hours: "24/7",
            url: "https://www.agencemobilitedurable.ca/en/practical-info/pmobileservice.html",
            type: "Helpful Apps",
            Neighbourhood: "West",
        },
        {
            heading: "Transit: Go Your Own Way",
            location: "Available through the App on iPhone and Android",
            hours: "24/7",
            url: "https://transitapp.com/",
            type: "Helpful Apps",
            Neighbourhood: "East",
        },
        {
            heading: "Canadian Broadcasing Company News App",
            location: "Available through the App on iPhone and Android",
            hours: "24/7",
            url: "https://www.cbc.ca/newsapp/",
            type: "Helpful Apps",
            Neighbourhood: "South",
        }

    ]
    await models.Service.bulkCreate(Service)

    const AllService = [
       {
            type: "Transportation in the City",
            imgPath: "http://5b0988e595225.cdn.sohucs.com/images/20171117/170ec0499b7a4d78bcfe144c238e1e44.jpeg",
            description: "Aterballetto Is the most important dance creation and performance group in Italy, and is the first permanent dance group independent of the opera house system.  Aterballetto was founded in 1979, and its first artistic director was Amedeo Ammodio. During his nearly 20 years in office (until 1996), the company amassed a large repertoire of repertoire, including works choreographed by Amoudio, as well as works by the most important international choreographers Goran Tateley, Alvin Eli, Lucinda Charles and other masters. In 1991,  Aterballetto became a group affiliated with the "Regional Dance Center", an artistic group jointly organized by the city of LeZot Emilia, emilia-Romagna and the Emilia-Romagna Dance Association, dedicated to dance creation, with an international vision of the functions of repertoire production, promotion, dissemination, training, learning and research, and performing in regular dance seasons. In 1996, Federico Greeley became President and Head of the Association Dance Company, and under his leadership, it was renamed the Dance Center in 2001 and began to expand its horizons to Italy, Europe and the global region. Since April 2003, the Dance Center has become a dance group under the National Dance Foundation. At present, the reserved program of Aterballetto includes works choreographed by the following artists: Mauro Bigonzetti, Michel Abundonza and Andonella Bertone, Itkik Galilee, and other young European choreographers, as well as internationally renowned artists such as William Forster and Girrie Killen.",

        },
        {
            type: "Outdoor Fun",
            imgPath: "https://images.unsplash.com/photo-1574607076416-1b1cbd1846a8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
            description: "Enjoy Montreal like a local! Grab a scooter or e-bike for those hills, or learn to love winter with a nordic ski rental on the mountain and a pair of skates by the St.Lawrence river. Have fun!",

        },
        {
            type: "Safety",
            imgPath: "https://images.unsplash.com/photo-1595277542060-6324da6d30f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1153&q=80",
            description: "We all need a hand sometimes. Volunteers are available for crisis situations, and the Nightline is open to any call for any reason. Walksafe will send a car or a buddy to help you get home after a late night, for free. ",

        },
        {
            type: "Getting to Montreal",
            imgPath: "https://images.unsplash.com/photo-1485833380722-ff5c9b742ce4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
            description: "Planes, trains, and automobiles! You can even take a ferry to beautiful Montreal. Choose what works for your budget and schedule. ",

        },
        {
            type: "Tourism Infopoints",
            imgPath: "https://images.unsplash.com/photo-1532299039866-065669a2d5df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1276&q=80",
            description: "Offices around the city are open to help you plan your trip and navigate the city. Visit to ask questions and get visitor materials in English or French. ",

        },
        {
            type: "Emergency Services",
            imgPath: "https://images.unsplash.com/photo-1593534800980-388d57cc0b87?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
            description: "In case of an emergency, call 911 to reach all emergency services. Service is multilingual, so don't hesitate to call. ",

        },
        {
            type: "Top Hotels",
            imgPath: "https://images.unsplash.com/photo-1496417263034-38ec4f0b665a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
            description: "Montreal is brimming with hotels for every style and budget: luxury or boutique, designer or hostel, you're sure to find somewhere you'll feel at home. ",

        },
        {
            type: "Hospitals",
            imgPath: "https://images.unsplash.com/photo-1555108004-a9183c23169e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
            description: "We wish you a safe stay in Montreal, but life can be unpredicatable. If you need to seek medical attention, rest assured that Montreal is home to a large number of hospitals, many of which are internationally ranked in their specialties. ",

        },
        {
            type: "Banks",
            imgPath: "https://images.unsplash.com/photo-1512763613895-de7207475439?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1365&q=80",
            description: "Unfortunately, travel costs! While Montreal is famous for being an affordable city, you'l still need to withdraw at some point in your stay. Trust any of the following institutions, which are ready to serve you in English ro French. ",

        },
        {
            type: "Helpful Apps",
            imgPath: "https://images.unsplash.com/photo-1621983062294-e5a7ce79a990?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
            description: "Stay informed with these hand smartphone apps. Find your way in the city with Transit, pay for parking from the comfort of your table with P$ service mobile, and check in o current events around you with Canada's leading news source. ",

        }

    ]
    await models.AllService.bulkCreate(AllService)

    const Itineraries = [
        {
            imgPath: "https://d3rr2gvhjw0wwy.cloudfront.net/uploads/activity_headers/51360/2000x2000-0-70-29bde528fdc139b63abfe78184fd1957.jpg",
            description: "The Palazzo Pitti, in English sometimes called the Pitti Palace, is a vast, mainly Renaissance, palace in Florence, Italy. It is situated on the south side of the River Arno, a short distance from the Ponte Vecchio",
            heading: "Florence-Pitti Palace",
            duration: "",
            imgPathMap: ""
        },
        {
            imgPath: "https://www.ourescapeclause.com/wp-content/uploads/2021/08/shutterstock_1372373447-scaled.jpg",
            description: "Piazza San Marco, often known in English as St Mark's Square, is the principal public square of Venice, Italy, where it is generally known just as la Piazza. All other urban spaces in the city are called campi. The Piazzetta is an extension of the Piazza towards San Marco basin in its south east corner. ",
            heading: "venice-St. Mark's Square",
            duration: "",
            imgPathMap: "",
        },
        {
            imgPath: "https://a.cdn-hotels.com/gdcs/production86/d1205/3596db38-0609-4f0d-b7be-1a98527384c6.jpg",
            description: "The Buen Retiro Park, Retiro Park or simply El Retiro is one of the largest parks of the city of Madrid, Spain. The park belonged to the Spanish Monarchy until the late 19th century, when it became a public park. In 2021, Buen Retiro Park became part of a combined UNESCO World Heritage Site with Paseo del Prado.",
            heading: "madrid-El Retiro Park",
            duration: "",
            imgPathMap: "",
        },

        {
            imgPath: "https://www.travellens.co/content/images/2022/03/Hyde-Park-london.jpg",
            description: "Hyde Park is a Grade I-listed major park in Central London. It is the largest of four Royal Parks that form a chain from the entrance of Kensington Palace through Kensington Gardens and Hyde Park, via Hyde Park Corner and Green Park past the main entrance to Buckingham Palace. The park is divided by the Serpentine and the Long Water lakes. The park was established by Henry VIII in 1536 when he took the land from Westminster Abbey and used it as a hunting ground. It opened to the public in 1637 and quickly became popular, particularly for May Day parades. Major improvements occurred in the early 18th century under the direction of Queen Caroline. Several duels took place in Hyde Park during this time, often involving members of the nobility. The Great Exhibition of 1851 was held in the park, for which The Crystal Palace, designed by Joseph Paxton, was erected.",
            heading: "London-Hyde Park",
            duration: "",
            imgPathMap: "",
        },
        {
            imgPath: "https://www.mtlblog.com/media-library/image.jpg?id=26890332&width=1245&height=700&quality=85&coordinates=40%2C0%2C40%2C0",
            description: "At the northern tippy top of the island, this lovely park meanders along the verdant grassy knolls that line the banks of Rivière-des-Prairies, with occasional detours onto Henri Bourassa Street, where you’ll spot some of the city’s oldest farmhouses. Walking eastward, when you reach the little inlet at Gouin and Papineau, go explore the trails near Simon Sicard Dam. The views of the river are great.",
            heading: "Montreal-Montreal Park",
            duration: "",
            imgPathMap: ""
        },

    ]

    await models.Itineraries.bulkCreate(Itineraries)

    const poiEventsJoinTable = [
        

    ]


    await models.poiEventsJoinTable.bulkCreate(poiEventsJoinTable)
}
