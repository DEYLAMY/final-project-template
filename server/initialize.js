

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
            heading: "Silent Carmen",
            location: "Venice-St. Mark's Square",
            hours: "23 Sep - 26 Sep",
            url: "https://ali-ali.herokuapp.com/all-festival/poi?id=8",
            type: "Aterballetto",
            Neighbourhood: "East",
        },
        {
            heading: "Gianni Schicchi | Film",
            location: "Montreal-Montreal Park",
            hours: "20 Sep - 29 Sep",
            url: "https://ali-ali.herokuapp.com/all-festival/poi?id=6",
            type: "Aterballetto",
            Neighbourhood: "East",
        },
        {
            heading: "Il canto degli ulivi | I Bassifondi",
            location: "Florence-Pitti Palace",
            hours: "1 Sep - 9 Sep",
            url: "https://ali-ali.herokuapp.com/all-festival/poi?id=4",
            type: "Aterballetto",
            Neighbourhood: "South",
        },
        {
            heading: "Anna Pirozzi",
            location: "Florence-Pitti Palace",
            hours: "6 Sep - 9 Sep",
            url: "https://ali-ali.herokuapp.com/all-festival/poi?id=3",
            type: "Aterballetto",
            Neighbourhood: "West",
        },
        {
            heading: "Pretty Yende",
            location: "Florence-Pitti Palace",
            hours: "6 Sep - 8 Sep",
            url: "https://ali-ali.herokuapp.com/all-festival/poi?id=2",
            type: "Aterballetto",
            Neighbourhood: "East",
        },
        {
            heading: "Puglia Dance and Tarantula Spider Night",
            location: "Florence-Pitti Palace",
            hours: "2 Sep - 4 Sep",
            url: "https://ali-ali.herokuapp.com/all-festival/poi?id=1",
            type: "Aterballetto",
            Neighbourhood: "South",
        },
        {
            heading: "Silent Carmen",
            location: "Venice-St. Mark's Square",
            hours: "23 Sep - 26 Sep",
            url: "https://ali-ali.herokuapp.com/all-festival/poi?id=8",
            type: "Beatrice Bresolin",
            Neighbourhood: "East",
        },
        {
            heading: "Puglia Dance and Tarantula Spider Night",
            location: "Florence-Pitti Palace",
            hours: "Florence-Pitti Palace",
            url: "https://ali-ali.herokuapp.com/all-festival/poi?id=1",
            type: "Beatrice Bresolin",
            Neighbourhood: "South",
        },
        {
            heading: "TOSCA",
            location: "London-London-Hyde Park",
            hours: "6 Sep - 7 Sep",
            url: "https://ali-ali.herokuapp.com/all-festival/poi?id=10",
            type: "Beatrice Bresolin",
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
            type: "Aterballetto",
            imgPath: "https://dancingopportunities.com/wp-content/uploads/2022/02/Fondazione-Nazionale-della-Danza-Aterballetto-Audition-for-2022-23-Season.jpg",
            description: "At present, the reserved program of Aterballetto includes works choreographed by the following artists: Mauro Bigonzetti, Michel Abundonza and Andonella Bertone, Itkik Galilee, and other young European choreographers, as well as internationally renowned artists such as William Forster and Girrie Killen",

        },
        {
            type: "Beatrice Bresolin",
            imgPath: "http://www.cantieridanza.it/festivalammutinamenti/files/2021/08/ritratto_beatrice_bresolin_sito.jpg",
            description: "She makes work for the stage and for urban and natural contexts, in dialogue with the environment, architecture, works of art and people, significantly relying on the senses. Her practice acknowledges the body as the place of being, as a tool to know the world and as a source of knowledge itself. The art of words fascinates and helps her as well, as a tool for conceptualization, communication, and imagination.",

        },
        {
            type: "Safety",
            imgPath: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwoWSjf6kkoYhmIP8X0Feowt5Z57rjlwDe_w&usqp=CAU",
            description: "His work questions the role and functioning of memory, and focuses on the relationship between performer and spectator. Dance, a complex geography in which sounds, words and movements constantly collide, tends towards the emotional compromise of the ones who perform and the ones who watch.",

        },
        {
            type: "Getting to Montreal",
            imgPath: "https://www.ridcc.com/site/wp-content/uploads/2020/01/sharon-eyal-screenshot--1100x595.png",
            description: "Alongside their work with L-E-V, Eyal and Behar had also been commissioned to create for external companies such as Bedroom Folk, Salt Womb, Feelings and Sara for the Nederland Dance Theatre; Strong  for StaatsBallett, Berlin, Germany, Faunes for The Paris Opera, France Half Life for the Royal Swedish Ballet; Untitled Black and Autodance for GöteborgsOperans Danskompani, Sweden; Killer Pig and Corps de Walk for Carte Blanche Dance of Norway; Too Beaucoup for Hubbard Street Dance Chicago; Plafona for Tanzcompagnie Oldenburg Germany; Promise, Soul Chain for Staatstheater Mainz, Germany and more.",

        },
        {
            type: "Tourism Infopoints",
            imgPath: "http://iicparigi.esteri.it/iic_parigi/resource/img/2022/03/gs.png",
            description: "Graduated in piano at the Conservatory of Vicenza with 10 laude and honorable mention under the guidance of Riccardo Zadra and Roberto Prosseda, he currently attends the Master's degree at Yale University with Boris Berman.",

        },
        {
            type: "Emergency Services",
            imgPath: "https://angartwork.akamaized.net/?id=1061186&size=640",
            description: "German pianist and (film-) composer Christian Pabst is a true storyteller.While being deeply rooted and connected to the greats of jazz, Christian developed an original, strong and genre transcending voice as a pianist and composer. Finding inspiration not only in the magnificent diversity of the arts but also in travelling and everyday life, his radiant music is very visual and inspires your imagination. “I want to create music that speaks to the heart and the mind alike” says the pianist. ",

        },
        {
            type: "Top Hotels",
            imgPath: "http://www.fazioli.com/sites/default/files/concerthall/sito_1140x858_armellini.png",
            description: "She graduated summa cum laude at the age of 17 at the National Academy of S. Cecilia in Rome, under the guidance of Sergio Perticaroli and her artistic development is also influenced by Lilya Zilberstein (Musikhochschule Hamburg) and Boris Petrushansky (Accademia Pianistica “Incontri col Maestro”, Imola).",

        },
        {
            type: "Hospitals",
            imgPath: "https://www2.kronbergacademy.de/fileadmin/_processed_/1/d/csm_piccotti-erica_01_ae20ab0ef5.jpg",
            description: "She won first prizes in national and international competitions including Rassegna Nazionale d’Archi di Vittorio Veneto, Premio Nazionale delle Arti run by Italy.",

        },
        {
            type: "Banks",
            imgPath: "https://spettacolo.emiliaromagnacultura.it/wp-content/uploads/2021/10/1469cc68a2ae8fe0e9f8d7cdc82022e8-malosti-foto-di-laila-pozzi-363x235.png",
            description: "prestigious theatres and festivals in Italy and worldwide.",

        },
        {
            type: "Helpful Apps",
            imgPath: "https://www.teatriincomune.roma.it/wp-content/uploads/2018/08/roberto-latini-pdf.jpg",
            description: "He enrolled in the acting school Il Mulino di Fiora, directed by Perla Peragallo, where he graduated in 1992. With his classmates Nicola D'Angelis and Maximilian La Monica founded the Associazione Teatro Es. In the meantime he completed his studies at the Faculty of Letters and Philosophy of the University of Rome",

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
