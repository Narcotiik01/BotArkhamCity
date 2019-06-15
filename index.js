const Discord = require('discord.js');

const client = new Discord.Client();

var prefix = "!";

client.login(process.env.TOKEN);

client.on("ready", () => {
    var generalChannel = client.channels.get("570421623274995724")
    generalChannel.send(":warning: La procedure de redemarrage vient d'être lancé")
    generalChannel.send(":alarm_clock: veuillez patienter ...")
    generalChannel.send(":white_check_mark: Redemarré avec succès")
    client.user.setActivity("❤️ Nexus City ❤️", {type: "WATCHING"})
});

client.on("message", message => {
    if (message.author.bot) return;
    if (!message.content.startsWith(prefix)) return;

    let command = message.content.split(" ")[0];
    command = command.slice(prefix.length);

    let args = message.content.split("").slice(1);

    if (command === "ping") {
        message.channel.send(`:ping_pong: pong! temps de réponse ${Date.now() - message.createdTimestamp} ms`);
        message.delete().catch();
    } else

    if (command === "ping2") {
        message.channel.send(`:ping_pong: pong! temps de réponse ${Date.now() - message.createdTimestamp} ms`);
        message.channel.send(`:ping_pong: pong2! temps de réponse ${Date.now() - message.createdTimestamp} ms`);
        message.delete().catch();
    } else

    if (command === "ping3") {
        message.channel.send(`:ping_pong: pong! temps de réponse ${Date.now() - message.createdTimestamp} ms`);
        message.channel.send(`:ping_pong: pong2! temps de réponse ${Date.now() - message.createdTimestamp} ms`);
        message.channel.send(`:ping_pong: pong3! temps de réponse ${Date.now() - message.createdTimestamp} ms`);
        message.delete().catch();
    } else

    if (command === "ping4") {
        message.channel.send(`:ping_pong: pong! temps de réponse ${Date.now() - message.createdTimestamp} ms`);
        message.channel.send(`:ping_pong: pong2! temps de réponse ${Date.now() - message.createdTimestamp} ms`);
        message.channel.send(`:ping_pong: pong3! temps de réponse ${Date.now() - message.createdTimestamp} ms`);
        message.channel.send(`:ping_pong: pong4! temps de réponse ${Date.now() - message.createdTimestamp} ms`);
        message.delete().catch();
    } else

    if (command)

    if(command === "bot:") {
   
        const sayMessage = args.join("");
      
        message.delete().catch(); 
       
        message.channel.send(sayMessage);
      }
 
    if (command == "help") {
        const embed = new Discord.RichEmbed()
        .setColor(0xff0d0d)
        .setTitle(":closed_book: Liste des commandes:")
        .addField("!ip","Vous permez de recevoir l'adresse ip du serveur")
        .addField("!vote","vous permez de recevoir notre lien top serveur")
        .addField("!event","vous permez de vous renseigner sur les events prévu")
        .addField("!site","vous permez de recevoir le lien de notre site")
        message.delete().catch();
        message.channel.send({embed})
    }

    client.on('message', function (message) {
        if (message.content === "!info") {
            message.channel.sendMessage('Bonjour a tous et a toutes (même si il n\'y as plus de fille apparemment snif) j\'ai le plaisir de vous annoncer que le serveur nexus est repris par une équipe')
            message.channel.sendMessage('qui je l\'espère seras a la hauteur de vos attente bien évidemment votre progression de joueur n\'est pas perdu. Bien évidemment l\'équipe admin compte sur vous pour être présent lors de la ré-ouverture.')
            message.channel.sendMessage('En ce qui concerne notre ligne directrice pour le serveur nous resterons dans la lignée de nexus et des 1ers fondateurs.N\'oubliez pas que le channel suggestion est la pour')
            message.channel.sendMessage('donner vos idées et c\'est le moment idéal pour le spammer. Je ferais un patchnote dans les jours a venir pour les premières modifications. En attendant la réouverture l\'équipe se tiens a votre disposition pour toutes vos questions.')
            message.channel.sendMessage('De la part de toute la nouvelle équipe merci de votre futur soutien.')
            message.channel.sendMessage('Cordialement Arnaud Montbard et son équipe :heart:')
            message.delete().catch(); 
            console.log('Envoie des informations sur le nouveau du serveur')
          }
        });

        if (command == "go") {
            const embed = new Discord.RichEmbed()
            .setColor(0x2722fb)
            .setTitle("Tous en ville!")
            .addField("Venez en ville , nous vous y attendons pour plus de RP!", "Nexus City")
            message.delete().catch(); 
            message.channel.send({embed})
        }
        
        });
        
        client.on('message', function (message) {
            if (message.content === "!ip") {
                message.reply('Hey, voici l\'adresse IP du serveur Nexus City 5.196.220.115:30120  pour toute information n\'hésite pas à demander aux administrateurs. :heart:')
                console.log('Envoie de l\'adresse IP du serveur')
            }
        });
        
        client.on('message', function (message) {
            if (message.content === "!vote") {
                message.channel.sendMessage('Hey, Voici le lien de notre TOP serveur, nous te remercions d\'avance pour ton vote https://gta.top-serveurs.net/nexus-city-5cbcde0d6e9e7. :heart:')
                console.log('Envoie du lien top serveur')
            }
        });
        
        client.on('message', function (message) {
            if (message.content === "!event") {
                message.reply('Une grande chasse au trésor est prévu, restez à l\'affût !. :heart:')
                console.log('Envoie des informations sur les events à venir')
            }
        });
        
        client.on('message', function (message) {
            if (message.content === "!site") {
                message.reply('Voici le lien de notre site internet https://www.nexuscity.fr. :heart:')
                console.log('Envoie du lien du site')
            }
        });
        
        client.on('message', function (message) {
            if (message.content === "Bonne soirée à tous") {
                message.reply('Bonne soirée à toi 😛')
                console.log('Envoie du lien du site')
            }
        });
        
        client.on('message', function (message) {
            if (message.content === "Bonjour à tous") {
                message.reply('Salut toi, tu vas bien ? 😍')
                console.log('Envoie du lien du site')
            }
        });
        
        client.on('message', function (message) {
            if (message.content === "un admin dispo ?") {
                message.reply('Quand ils seront disponible, ils viendrons vers toi 😺')
                console.log('Envoie du lien du site')
            }
        });