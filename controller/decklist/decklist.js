var db = require("../../models");

module.exports ={

    getDecklists: function (req, res){
        //console.log(req.user);
        res.send(
            [
              {
                id: 1, 
                code: 'CEBACAIAGYDQCBIOCATSQKRRGUBACAIAFEDACBIWDURCGKZYAEBACBIBEE', 
                name: "Fearsome + Demacia", 
                description: "This is a grindy mid range deck looking to abuse the Fearsome keyword. It can go under control with aggression from cards like Elise and Mark of the Isles, and has enough late game to go over top of aggro decks. This version splashes 5 cards from Demacia, 3 Vanguard Redeemer to add some more card advantage and 2 Back to Back to pull surprise wins or control the board.", 
                cardArtId: "01SI016" 
            },
            {
                id: 2, 
                code: 'CEBACAICHEDQCBIOCATSQKRRGUBACAICGEDACBIWDURCGKZYAEBACBIBEE', 
                name: "Fearsome + Ionia", 
                description: "This is a grindy mid range deck looking to abuse the Fearsome keyword. It can go under control with aggression from cards like Elise and Mark of the Isles, and has enough late game to go over top of aggro decks. This version splashes 5 cards from Ionia, 3 Shadow Assassin to help against elusive decks and add some card advantage, and 2 Deny to help against troublesome spells.", 
                cardArtId: "01SI016" 
            },
             {
                id: 3, 
                code: 'CEBAGAICFYYTMBQBAQARAGZHGQ4AEAIBAIBAKAIEDQPTAMJ2AEAQCBBZ', 
                name: "Heimerdinger Control", 
                description: "This is a control deck centered around Heimerdinger. You want to use your cheap removal and stun effects to survive until you can stick a Heimerdinger with Deny up to protect him. Once thats done its time to start spamming spells and build a robot army to gain control of the game. The deck runs as many spells as possible to allow for Corina Veraza to be a reliable back up win condition.", 
                cardArtId: "01PZ056T10" 
            },
             {
                id: 4, 
                code: 'CEBAGAIBAMFSUCABAQAR6JBHFMYTIOQCAEAQIGYCAEAR4JABAEAQCHI', 
                name: "EZ Combo", 
                description: "The goal of this deck is to level up Ezreal and spam spells to kill your opponents with Ezreal's ability. You should try to hold off on playing Ezreal until he is ready to level up so he is harder to kill and you can start pinging your opponent immediately.", 
                cardArtId: "01PZ036T1" 
            },
              {
                id: 5, 
                code: 'CEBAEAIDBMKASAIEAEIBWJZLGQ3TQOQBAMAQIBRCGEAQCAIEEM', 
                name: "HeimerDraven Midrange", 
                description: "Draven and Heimer in the same deck? This is a surprisingly effective midrange build with a ton of synergy. Draven generates tons Spinning Axes that fuel Rummage and Get Excited, cheapen Plaza Guadians, and trigger Jae Medarda. All of the card draw helps grow our Astute Academics, and Sumpsnipe Scavenger can close out the game by giving a big threat elusive.", 
                cardArtId: "01NX020" 
            },
             {
                id: 6, 
                code: 'CEBAIAIBBEGS2LQGAEBQKBQODYVS6AQBAEASGBABAMLB2MBSAA', 
                name: "Purrsuit of Perfection v1", 
                description: "This is the 1st attempt at the Purrsuit of Perfection, we are going to try the control suite of Shadow Isles and Piltover and Zaun to give use enough time to play 20 different cards and find our Purrsuit. This deck will need a ton of tweaking to find out how much we can get away with given the meta.", 
                cardArtId: "01PZ033T1" 
            },
    
            {
                id: 7, 
                code: 'CEAQGAIEE42DUAQGAECACEA3EEVTQBYBAUFBUHJIFMYTMAQBAECDCBABAUARGIZK', 
                name: "Yasuo Control", 
                description: "This deck aims to use Recall and Stun effects to hold your opponent back until you can win with a big attack.", 
                cardArtId: "01IO015" 
            },
             {
                id: 8, 
                code: 'CEBAIAICCMQDCOIFAEAASCY5EAWQEAYBAADRUJIDAEBAYERXAEAQCAQC', 
                name: "Fiora Exodia", 
                description: "This deck is all about using Fiora to win, it has a ton of barriers to keep her fighting and protected.", 
                cardArtId: "01DE045" 
            },
            {
                id: 9, 
                code: 'CEBAIAIEBAFDKOQIAEBAECYYFEVTCMRZAEBACARHFUAA', 
                name: "Teemo Meme-o", 
                description: "They put Teemo in a card a game! Now use him to fill your opponents deck with poison mushrooms!", 
                cardArtId: "01PZ008" 
            },
            {
                id: 10, 
                code: 'CEBAIAIFAEHSQNQHAEAQGDAUEETSSNACAEAQKFACAEAROGABAEAQCCI', 
                name: "Freljord Control", 
                description: "This deck is all about killing you opponents units and developing big threats.", 
                cardArtId: "01FR039" 
            },
             {
                id: 11, 
                code: 'CEBAKAICD4UTCNJWA4AQCCIMC4QSSLZUAABAEAIBAUGQEAICBIQQ', 
                name: "Karma Ramp", 
                description: "Get to 10 mana, and let Karma win the game by doubling all your spells.", 
                cardArtId: "01IO041" 
            },
            {
                id: 12, 
                code: 'CEBAIAIDA4KBUJYGAECACDA4E4UDIAQBAECA2BABAMBAIDRYAA', 
                name: "Jinx Draven Aggro", 
                description: "Run out units quickly and discard cards for value with this aggressive decks.", 
                cardArtId: "01PZ040" 
            },
             {
                id: 13, 
                code: 'CEBACAIBAMFQCBIHBMNB4IRGFMYDCNJZAIAQCBJWAEAQCIQA', 
                name: "Aristocrats", 
                description: "This deck will generate a ton of value whenever your units die.", 
                cardArtId: "01SI030" 
            },
             {
                id: 14, 
                code: 'CEBAEAIAFIYAQAIEAMDBAGA3EQ2DSAQBAEACGAYBAQCAKMYCAEAQAMQBAECCO', 
                name: "Ionia P&Z Spellslingers", 
                description: "Cast spells to burn your opponent out and make your late game units cheaper.", 
                cardArtId: "01DE042" 
            },
            {
                id: 15, 
                code: 'CEBAKAIEBAKBONBZA4AQKBZEFAVTCNJYAEBACBJCFEAA', 
                name: "Von Yipp Aggro", 
                description: "This deck is all about buffing up 1 drop units with Von Yipp's ability.", 
                cardArtId: "01PZ023" 
            },
             {
                id: 16, 
                code: 'CEAQUAIAAEDAYFA4EISCOMZWAIAQCAJZAQAQABAOF44AA', 
                name: "Elites", 
                description: "This deck will take advantage of the synergies between Elite units.", 
                cardArtId: "01DE012" 
            },
            {
                id: 17, 
                code: 'CEBAKAIDB4LSULRXAUAQKJZIGU4DSAQCAEBQ2FQDAECSMMJSAA', 
                name: "Spiders", 
                description: "This deck will swarm the board with spiders and then buff them.", 
                cardArtId: "01SI053" 
            },
             {
                id: 18, 
                code: 'CEBAIAIBBYKBQHIHAECREHBCFEYDCNACAEAQCAYCAECSANQBAEAQKOQ', 
                name: "Avinia Clone", 
                description: "Using this deck you will be able to make an army of Avinias that keep coming back.", 
                cardArtId: "01FR024" 
            },
             {
                id: 19, 
                code: 'CEBAIAICAIEQ2GYFAECQUFIXD4VAEAQBAUDDMBABAIBRQMJZAEAQCBIW', 
                name: "Ephemeral Aggro", 
                description: "This deck uses a ton of Ephemeral units to rush the opponent down.", 
                cardArtId: "01SI021" 
            },
              {
                id: 20, 
                code: 'CEBAEAIACYTAQAIFBMNB4IRJFMYDCAQBAEAB6BABAUDQUERZAA', 
                name: "Lucian Aggro", 
                description: "This deck aims to evolve Lucian and finish the opponent off quick.", 
                cardArtId: "01DE022" 
            },
             {
                id: 21, 
                code: 'CEBAIAIBBEGS2LQGAEBQKBQODYVS6AQBAEASGBABAMLB2MBSAA', 
                name: "Vladimir Self Damage", 
                description: "This deck aims to quickly flip Vladimir with synergistic self-damaging units in Noxus.", 
                cardArtId: "01NX006" 
            },

        ]
    )
    },

    getDeckById: function(req,res){
        var id = req.query.id;
        //console.log(id);
        var cards = [
            {
                id: 1, 
                code: 'CEBACAIAGYDQCBIOCATSQKRRGUBACAIAFEDACBIWDURCGKZYAEBACBIBEE', 
                name: "Fearsome + Demacia", 
                description: "This is a grindy mid range deck looking to abuse the Fearsome keyword. It can go under control with aggression from cards like Elise and Mark of the Isles, and has enough late game to go over top of aggro decks. This version splashes 5 cards from Demacia, 3 Vanguard Redeemer to add some more card advantage and 2 Back to Back to pull surprise wins or control the board.", 
                cardArtId: "01SI016" 
            },
            {
                id: 2, 
                code: 'CEBACAICHEDQCBIOCATSQKRRGUBACAICGEDACBIWDURCGKZYAEBACBIBEE', 
                name: "Fearsome + Ionia", 
                description: "This is a grindy mid range deck looking to abuse the Fearsome keyword. It can go under control with aggression from cards like Elise and Mark of the Isles, and has enough late game to go over top of aggro decks. This version splashes 5 cards from Ionia, 3 Shadow Assassin to help against elusive decks and add some card advantage, and 2 Deny to help against troublesome spells.", 
                cardArtId: "01SI016" 
            },
             {
                id: 3, 
                code: 'CEBAGAICFYYTMBQBAQARAGZHGQ4AEAIBAIBAKAIEDQPTAMJ2AEAQCBBZ', 
                name: "Heimerdinger Control", 
                description: "This is a control deck centered around Heimerdinger. You want to use your cheap removal and stun effects to survive until you can stick a Heimerdinger with Deny up to protect him. Once thats done its time to start spamming spells and build a robot army to gain control of the game. The deck runs as many spells as possible to allow for Corina Veraza to be a reliable back up win condition.", 
                cardArtId: "01PZ056T10" 
            },
             {
                id: 4, 
                code: 'CEBAGAIBAMFSUCABAQAR6JBHFMYTIOQCAEAQIGYCAEAR4JABAEAQCHI', 
                name: "EZ Combo", 
                description: "The goal of this deck is to level up Ezreal and spam spells to kill your opponents with Ezreal's ability. You should try to hold off on playing Ezreal until he is ready to level up so he is harder to kill and you can start pinging your opponent immediately.", 
                cardArtId: "01PZ036T1" 
            },
              {
                id: 5, 
                code: 'CEBAEAIDBMKASAIEAEIBWJZLGQ3TQOQBAMAQIBRCGEAQCAIEEM', 
                name: "HeimerDraven Midrange", 
                description: "Draven and Heimer in the same deck? This is a surprisingly effective midrange build with a ton of synergy. Draven generates tons Spinning Axes that fuel Rummage and Get Excited, cheapen Plaza Guadians, and trigger Jae Medarda. All of the card draw helps grow our Astute Academics, and Sumpsnipe Scavenger can close out the game by giving a big threat elusive.", 
                cardArtId: "01NX020" 
            },
             {
                id: 6, 
                code: 'CEBAIAIBBEGS2LQGAEBQKBQODYVS6AQBAEASGBABAMLB2MBSAA', 
                name: "Purrsuit of Perfection v1", 
                description: "This is the 1st attempt at the Purrsuit of Perfection, we are going to try the control suite of Shadow Isles and Piltover and Zaun to give use enough time to play 20 different cards and find our Purrsuit. This deck will need a ton of tweaking to find out how much we can get away with given the meta.", 
                cardArtId: "01PZ033T1" 
            },
    
            {
                id: 7, 
                code: 'CEAQGAIEE42DUAQGAECACEA3EEVTQBYBAUFBUHJIFMYTMAQBAECDCBABAUARGIZK', 
                name: "Yasuo Control", 
                description: "This deck aims to use Recall and Stun effects to hold your opponent back until you can win with a big attack.", 
                cardArtId: "01IO015" 
            },
             {
                id: 8, 
                code: 'CEBAIAICCMQDCOIFAEAASCY5EAWQEAYBAADRUJIDAEBAYERXAEAQCAQC', 
                name: "Fiora Exodia", 
                description: "This deck is all about using Fiora to win, it has a ton of barriers to keep her fighting and protected.", 
                cardArtId: "01DE045" 
            },
            {
                id: 9, 
                code: 'CEBAIAIEBAFDKOQIAEBAECYYFEVTCMRZAEBACARHFUAA', 
                name: "Teemo Meme-o", 
                description: "They put Teemo in a card a game! Now use him to fill your opponents deck with poison mushrooms!", 
                cardArtId: "01PZ008" 
            },
            {
                id: 10, 
                code: 'CEBAIAIFAEHSQNQHAEAQGDAUEETSSNACAEAQKFACAEAROGABAEAQCCI', 
                name: "Freljord Control", 
                description: "This deck is all about killing you opponents units and developing big threats.", 
                cardArtId: "01FR039" 
            },
             {
                id: 11, 
                code: 'CEBAKAICD4UTCNJWA4AQCCIMC4QSSLZUAABAEAIBAUGQEAICBIQQ', 
                name: "Karma Ramp", 
                description: "Get to 10 mana, and let Karma win the game by doubling all your spells.", 
                cardArtId: "01IO041" 
            },
            {
                id: 12, 
                code: 'CEBAIAIDA4KBUJYGAECACDA4E4UDIAQBAECA2BABAMBAIDRYAA', 
                name: "Jinx Draven Aggro", 
                description: "Run out units quickly and discard cards for value with this aggressive decks.", 
                cardArtId: "01PZ040" 
            },
             {
                id: 13, 
                code: 'CEBACAIBAMFQCBIHBMNB4IRGFMYDCNJZAIAQCBJWAEAQCIQA', 
                name: "Aristocrats", 
                description: "This deck will generate a ton of value whenever your units die.", 
                cardArtId: "01SI030" 
            },
             {
                id: 14, 
                code: 'CEBAEAIAFIYAQAIEAMDBAGA3EQ2DSAQBAEACGAYBAQCAKMYCAEAQAMQBAECCO', 
                name: "Ionia P&Z Spellslingers", 
                description: "Cast spells to burn your opponent out and make your late game units cheaper.", 
                cardArtId: "01DE042" 
            },
            {
                id: 15, 
                code: 'CEBAKAIEBAKBONBZA4AQKBZEFAVTCNJYAEBACBJCFEAA', 
                name: "Von Yipp Aggro", 
                description: "This deck is all about buffing up 1 drop units with Von Yipp's ability.", 
                cardArtId: "01PZ023" 
            },
             {
                id: 16, 
                code: 'CEAQUAIAAEDAYFA4EISCOMZWAIAQCAJZAQAQABAOF44AA', 
                name: "Elites", 
                description: "This deck will take advantage of the synergies between Elite units.", 
                cardArtId: "01DE012" 
            },
            {
                id: 17, 
                code: 'CEBAKAIDB4LSULRXAUAQKJZIGU4DSAQCAEBQ2FQDAECSMMJSAA', 
                name: "Spiders", 
                description: "This deck will swarm the board with spiders and then buff them.", 
                cardArtId: "01SI053" 
            },
             {
                id: 18, 
                code: 'CEBAIAIBBYKBQHIHAECREHBCFEYDCNACAEAQCAYCAECSANQBAEAQKOQ', 
                name: "Avinia Clone", 
                description: "Using this deck you will be able to make an army of Avinias that keep coming back.", 
                cardArtId: "01FR024" 
            },
             {
                id: 19, 
                code: 'CEBAIAICAIEQ2GYFAECQUFIXD4VAEAQBAUDDMBABAIBRQMJZAEAQCBIW', 
                name: "Ephemeral Aggro", 
                description: "This deck uses a ton of Ephemeral units to rush the opponent down.", 
                cardArtId: "01SI021" 
            },
              {
                id: 20, 
                code: 'CEBAEAIACYTAQAIFBMNB4IRJFMYDCAQBAEAB6BABAUDQUERZAA', 
                name: "Lucian Aggro", 
                description: "This deck aims to evolve Lucian and finish the opponent off quick.", 
                cardArtId: "01DE022" 
            },
             {
                id: 21, 
                code: 'CEBAIAIBBEGS2LQGAEBQKBQODYVS6AQBAEASGBABAMLB2MBSAA', 
                name: "Vladimir Self Damage", 
                description: "This deck aims to quickly flip Vladimir with synergistic self-damaging units in Noxus.", 
                cardArtId: "01NX006" 
            },

        ];
        var card;

        for(var x = 0; x <cards.length; x++){
            if(cards[x].id === parseInt(id)){
                card = cards[x];
                break;
            }
        }
        //console.log(card);
        res.send(card);
    }
}