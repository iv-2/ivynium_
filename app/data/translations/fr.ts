import { Content } from "../Content";

const fr: Content = {
  slogan: "Extraire la Valeur, Libérer le Potentiel",
  catchPhrase:
    "Ivynium est votre partenaire de confiance pour propulser votre présence en ligne et optimiser votre workflow.",
  CTA: {
    button: "Décollons ensemble",
    form: {
      contact: "Laissez-nous un message",
      name: "Nom",
      email: "Adresse mail",
      subject: "Sujet",
      message: "Message",
      legal: { text: "Je consens à la collecte, au stockage et au traitement de mes données personnelles dans le but de répondre à ma demande, conformément à la ", link: "Politique de Confidentialité." },
      submit: "Envoyer",
      confirm: "Confirmez-vous vouloir nous contacter avec l'adresse",
      cancel: "Annuler",
      success: "Votre message a été envoyé avec succès via",
      fail: "L'envoi de votre message a échoué. Contactez-nous directement à",
      required: "Veuillez remplir tous les champs et accepter la Politique de Confidentialité.",
      quit: "Votre message n'a pas été envoyé. Voulez-vous vraiment quitter?",
    },
  },
  services: [
    {
      title: "Développement Web",
      text: "Différenciez votre marque avec un site d'exception ! La bonne nouvelle, c'est que nous vous assistons à chaque étape: la conception initiale et le design avec un prototype Figma, le code en React/Remix (SSR) pour des performances de pointe, l'optimisation pour les moteurs de recherche (SEO) pour rester en tête, des animations fluides, des effets 3D avec Threejs, le déploiement, et même l'utilisation d'un gestionnaire de contenu pour que vous n'ayez jamais à écrire une seule ligne de code.",
      techs: [
        {
          logoUrl: "/logos/figma.svg",
          tooltipText: "Figma",
        },
        {
          logoUrl: "/logos/react.svg",
          tooltipText: "React",
        },
        {
          logoUrl: "/logos/remix.webp",
          tooltipText: "Remix",
        },
        {
          logoUrl: "/logos/typescript.svg",
          tooltipText: "Typescript",
        },
        {
          logoUrl: "/logos/tailwind.svg",
          tooltipText: "Tailwind CSS",
        },
        {
          logoUrl: "/logos/threejs.svg",
          tooltipText: "Threejs",
        },
      ],
    },
    {
      title: "Développement Logiciel",
      text: "Si votre problème n'est pas (juste) un problème de web, pas de problème ! Nous résolvons différents problèmes à l'aide d'outils variés fournis par notre formation en ingénierie logicielle et notre apprentissage rapide. Que vous ayez besoin de développer un logiciel Java, d’automatiser des tâches pénibles dans vos applications Office (VBA)/Google Workplace, de parcourir une base de données (SQL), ou même de faire une app pour iPhone (SwiftUI/UIKit), on vous couvre.",
      techs: [
        {
          logoUrl: "/logos/java.svg",
          tooltipText: "Java",
        },
        {
          logoUrl: "/logos/office.svg",
          tooltipText: "Office (VBA)",
        },
        {
          logoUrl: "/logos/postgresql.svg",
          tooltipText: "PostgreSQL",
        },
        {
          logoUrl: "/logos/swift.svg",
          tooltipText: "SwiftUI / UIKit",
        },
      ],
    },
    {
      title: "Notre Philosophie",
      text: "Chez Ivynium, nous pensons que pour être utile, la technologie doit être pleinement acceptée. C'est pour quoi nous priorisons des solutions personnalisées qui en plus de répondre à vos besoins, s'assurent d'être intégrées de manière transparente dans votre workflow. Avec une approche centrée sur l'humain, nous offrons une gestion du changement efficace et assurons que les changements soient acceptés, adoptés, et durables.",
      techs: [],
    },
  ],
  trustPhrase: "Ils nous font confiance",
  testimonies: [
    {
      photoUrl: "/images/romain.webp",
      text: "J’ai fait appel à l’expertise d’Ivynium pour créer plusieurs outils visant à fiabiliser la récupération et le traitement de données pour mes équipes. Chaque membre a été accompagné sur le fonctionnement des outils qui ont apporté un confort et un gain de temps importants. Cela fait maintenant 1 an que ces dispositifs sont déployés et leur efficacité est toujours au rendez-vous. Je recommande sincèrement leurs services !",
      name: "Romain Choquet",
      position: "Responsable d'activité chez Auchan Logistique",
    },
    {
      photoUrl: "/images/merendys.webp",
      text: "Je suis extrêmement satisfaite du travail d'Ivynium. Sans même m’étaler sur leur sens du détail et la pertinence de leurs propositions, j’ai été agréablement surprise car je n’ai rien eu à gérer pour le fonctionnement de mon site. Du début à la fin, mes attentes et demandes ont été respectées. Je vous conseille vivement de collaborer avec eux.",
      name: "Mérèndys Martine",
      position: "Créatrice de Merendys",
    },
    {
      text: "Ivynium m'a aidé à implémenter des fonctionnalités sur mon site Wix, et je dois dire que leur capacité à combiner créativité et fonctionnalité a donné un site soigné et user-friendly dont je suis très content ! Fortement recommandé pour quiconque ayant besoin d'un site professionnel !",
      photoUrl: "/images/kyler.webp",
      name: "Kyler Mils",
      position: "Interprète et Producteur",
    },
  ],
  successPhrase: "Missions accomplies",
  missions: [
    {
      title: "Auchan Retail Logistique",
      link: undefined,
      text: "Après avoir appris comment l'équipe export travaillait, nous avons suggéré et implémenté des automatisations et des optimisations dans les fichiers Excel et Google que l'équipe utilise tous les jours. Nous les avons aussi aidés à libérer le potentiel des outils qu'ils possédaient déjà. Le résultat? Un workflow significativement et durablement optimisé (KPI à l'appui !).",
    },
    {
      title: "Merendys.com",
      link: "http://dirmezys.netlify.app",
      text: `⚠️ site en BETA: le site n'est pas prêt pour une sortie publique puisque la propriétaire n'a pas défini le contenu, les polices, logos, liens externes, etc.. Elle a tout de fois accepté de partager cette url temporaire à des fins de démonstration.
      ---
      Conçu avec Figma, ce site Remix s'appuie sur Builder.io pour la gestion du contenu afin que Mérèndys n'ait jamais à écrire une seule ligne de code pour publier et mettre à jour son contenu. Nous avons géré le déploiement sur Netlify et boosté le site avec des fonctionnalités SEO pour améliorer le référencement sur les moteurs de recherche. Server Side Rendering (SSR), animations 3D,  scroll infini,... il possède toutes les fonctionnalités pour garantir une expérience optimisée et premium.`,
    },
    {
      title: "Kylermils.com",
      link: "https://www.kylermils.com",
      text: "Kyler Mils a choisi de développer son site par lui même en utilisant Wix. Mais même avec une solution aussi complète, de l'aide peut être nécessaire pour une personnalisation avancée, une intégration Shopify, ou des animations customisées. C'est là que nous intervenons.",
    },
  ],
  aboutUs: {
    title: "A propos de nous",
    subtitle: "(en réalité juste moi)",
    text: "Je m'appelle Ivance Amovin et je suis un étudiant d'Epita en quête d'expériences fascinantes avec des gens incroyables (vous) à travers le monde. Hier j'étais en France. Aujourd'hui je suis en Espagne. Demain? Qui sait...",
  },
  seeMore: {
    title: "Explorez d'avantage la Galaxy Ivynium",
    externalLinks: [
      {
        link: "https://www.linkedin.com/in/iamovin/",
        logoUrl: "/logos/linkedin.webp",
        logoAlt: "Linkedin"
      },
      {
        link: "https://github.com/iv-2",
        logoUrl: "/logos/github.webp",
        logoAlt: "GitHub"
      },
      {
        link: "/cv/fr.pdf",
        logoUrl: "/logos/cv.webp",
        logoAlt: "CV"
      },
    ],
  },
  legal: {
    title: "Mentions Légales",
    text: `Dernière mise à jour: 22/09/2024
Cette section décrit les conditions d’utilisation, politique de confidentialité et autres mentions légales du site internet ivynium.com, de ses sous-domaines et de toutes ses pages. Toute personne s’y connectant ou l’utilisant s’engage à respecter et à adhérer sans réserve à toutes les conditions et politiques mentionnées ici. Ivynium, qui est défini plus bas, se réserve le droit de modifier ces conditions et politiques à tout moment et sans préavis. Toute modification sera publiée sur cette section avec la date de mise à jour. L’utilisateur ou l’utilisatrice est encouragé et encouragée à consulter régulièrement cette section pour rester informé et informée. Le présent site est exploité dans le respect de la législation française. L'utilisation de ce site est régie par les présentes conditions générales. En utilisant le site, l’utilisateur ou l’utilisatrice reconnaît avoir pris connaissance de ces conditions et les avoir acceptées. Ivynium et ses représentants ne sauraient être tenus pour responsable en aucune manière d’une mauvaise utilisation du service.

Ivynium est une entreprise individuelle dont le propriétaire et responsable est Ivance AMOVIN. Le numéro SIRET de l’établissement est 93205725000015. L’entreprise est domiciliée au 3 chemin de la Grâce de Dieu, Saint-Germain-lès-Arpajon 91180 France. Son adresse électronique est contact@ivynium.com, et son site internet https://www.ivynium.com. Les sites internet de Ivynium sont édités et développés par Ivynium. Les sites internet de Ivynium sont hébergés par Netlify, Inc. situé au 512 2nd Street, Suite 200 San Francisco, CA 94107 États-Unis, dont le numéro de téléphone est le +1-336-725-4141, et dont le site internet est https://www.netlify.com.

Les présentes conditions sont régies par les lois françaises et toute contestation ou litiges qui pourraient naître de l'interprétation ou de l'exécution de celles-ci seront de la compétence exclusive des tribunaux dont dépend le siège social de Ivynium. La langue de référence, pour le règlement de contentieux éventuels, est le français.

Les sites internet de Ivynium peuvent offrir des liens vers d’autres sites internet ou d’autres ressources disponibles sur Internet. Ivynium ne dispose d'aucun moyen pour contrôler les sites en connexion avec ses sites internet. Ivynium ne répond pas de la disponibilité de tels sites et sources externes, ni ne la garantit, ni n’en valide le contenu. Elle ne peut être tenue pour responsable de tout dommage, de quelque nature que ce soit, résultant du contenu de ces sites ou sources externes, et notamment des informations, produits ou services qu’ils proposent, ou de tout usage qui peut être fait de ces éléments. Les risques liés à cette utilisation incombent pleinement à l'internaute, qui doit se conformer à leurs conditions d'utilisation.

Les informations contenues sur les sites internet de Ivynium sont aussi précises que possibles et les sites sont périodiquement remis à jour, mais peuvent toutefois contenir des inexactitudes, des omissions ou des lacunes. Si vous constatez une lacune, erreur ou ce qui parait être un dysfonctionnement, merci de bien vouloir le signaler par courrier électronique à contact@ivynium.com en décrivant le problème de la manière la plus précise possible (page posant problème, action déclenchante, type d’ordinateur et de navigateur utilisé,…).
Ivynium ne pourra être tenu responsable de dommages matériels liés à l’utilisation d’un de ses sites. L’utilisateur ou l’utilisatrice s’engage à accéder au site en utilisant un matériel récent, ne contenant pas de virus et avec un système d’exploitation et un navigateur de dernière génération mis-à-jour.
Ni le site ni l’hébergeur ne peuvent être tenus responsables en cas de dysfonctionnement du réseau Internet, des lignes téléphoniques ou du matériel informatique et de téléphonie lié notamment à l’encombrement du réseau empêchant l’accès au serveur.
Tout contenu téléchargé se fait aux risques et périls de l'utilisateur ou de l’utilisatrice et sous sa seule responsabilité. En conséquence, Ivynium ne saurait être tenu responsable d'un quelconque dommage subi par l'ordinateur de l'utilisateur ou de l’utilisatrice ou d'une quelconque perte ou altération de données consécutives au téléchargement.
Les photos sont non contractuelles.
Les liens hypertextes mis en place dans le cadre des sites internet de Ivynium en direction d'autres ressources présentes sur le réseau Internet ne sauraient engager la responsabilité de Ivynium.


POLITIQUE DE CONFIDENTIALITÉ
De manière générale, il n’est pas tenu à quiconque de communiquer des données personnelles lors de la visite des sites internet de Ivynium. Cependant, ce principe comporte une exception: le formulaire de contact dont les détails sont donnés ci-après.
Ivynium est l’organisme responsable du traitement des données fournies intentionnellement par les utilisateurs et utilisatrices. Pour toutes questions relatives à la protection de ces données, merci de contacter  par message électronique contact@ivynium.com. La base juridique du traitement des données est le consentement explicite de l’utilisateur ou de l’utilisatrice, recueilli par le biais du formulaire de contact. Ce formulaire recueille les données suivantes: nom, adresse électronique de contact, objet du message et message destiné à Ivynium. Les données collectées ont pour unique but de pouvoir répondre à la requête envoyée par l’utilisateur ou l’utilisatrice via le formulaire de contact. Les données ne sont collectées qu’au moment de l’envoi du formulaire par l’action de l’utilisateur ou de l’utilisatrice, après qu’il ou elle ait accepté la politique de confidentialité. La collecte de ces données est facultative et dépend de la volonté seule de l’utilisateur ou de l’utilisatrice. Ces données sont nécessaires au traitement de toute demande via la formulaire de contact. Sans celles-ci, aucun formulaire ne pourra être transmis. Si l’utilisateur ou l’utilisatrice décide de s’opposer à la requête de ces données, il ou elle peut entrer en contact directement via l’adresse électronique contact@ivynium.com. Les données sont exclusivement destinées à Ivynium et ses employés et employées en charge de la gestion des demandes. Le formulaire transite par Netlify, hébergeur du site, dont les coordonnées sont données plus bas. Le formulaire et ses données sont acheminées à Ivynium par courrier électronique qui est hébergé par LWS, Ligne Web Services, société par action simplifiée Française, au capital de 500.000 euros, identifiée sous le numéro 851 993 683 RCS Epinal, dont le siège social est sis 2 rue jules ferry 88190 Golbey France, et le numéro de contact +33 177 62 30 03. Les données collectées via le formulaire de contact sont conservées pendant 1 an à compter de la dernière correspondance. Pendant ce temps, elles sont protégées sur les systèmes de Ivynium par différentes méthodes de cryptographie, pare-feu et mots de passes. L’utilisateur ou l’utilisatrice peut refuser la collecte de ces données en n’utilisant pas le formulaire de contact, ou bien accéder, rectifier ou effacer des données envoyées. Il ou elle peut également déposer une plainte à la CNIL (Commission nationale de l'informatique et des libertés). Le formulaire de contact transite par Netlify qui est basé aux États-Unis (en dehors de l’Union Européenne) et qui se conforme au RGPD: https://www.netlify.com/gdpr-ccpa/. Les sites internet de Ivynium n’utilisent pas de cookies.


PROPRIÉTÉ INTELLECTUELLE
Les sites de Ivynium constituent une œuvre de l’esprit protégée par les dispositions du Code de la Propriété Intellectuelle et des Réglementations Internationales applicables. Tout le code source et le contenu du présent site, incluant, de façon non limitative, les graphismes, images, textes, vidéos, animations, sons, logos, gifs et icônes ainsi que leur mise en forme sont la propriété exclusive de Ivynium à l'exception des marques, logos ou contenus appartenant à d'autres sociétés partenaires ou auteurs. Toute reproduction, distribution, modification, adaptation, retransmission ou publication, même partielle, de ces différents éléments est strictement interdite sans l'accord exprès par écrit de Ivynium. Cette représentation ou reproduction, par quelque procédé que ce soit, constitue une contrefaçon sanctionnée par les articles L.335-2 et suivants du Code de la propriété intellectuelle. Le non-respect de cette interdiction constitue une contrefaçon pouvant engager la responsabilité civile et pénale du contrefacteur. En outre, les propriétaires des Contenus copiés pourraient intenter une action en justice à votre encontre.

A bon entendeur.`,
  }
};

export default fr;
