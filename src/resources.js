export const navigation = {
  MainPage: "/test-react",
  PageDice: "/test-react/dice",
  GachiSoundPage: "/test-react/gachi",
  TestFormPage: "/test-react/testForm"
};

export const resources = {
  MainPage: {
    title: "Главная страница",
    slides: [
      {
        image: "/test-react/images/Slider/slide1.jpg",
        text: "Слайд1",
      },
      {
        image: "/test-react/images/Slider/slide2.jpg",
        text: "Слайд2",
      },
      {
        image: "/test-react/images/Slider/slide3.jpg",
        text: "Слайд3",
      },
      {
        image: "/test-react/images/Slider/slide4.jpg",
        text: "Слайд4",
      },
    ],
  },
  PageDice: {
    title: "Кости",
    buttonText: "Бросить кубики",
    images: [
      "/test-react/images/Dice/dice1.svg",
      "/test-react/images/Dice/dice2.svg",
      "/test-react/images/Dice/dice3.svg",
      "/test-react/images/Dice/dice4.svg",
      "/test-react/images/Dice/dice5.svg",
      "/test-react/images/Dice/dice6.svg",
    ],
  },
  GachiSoundPage: {
    title: "Gachi Sounds",
    buttons: [
      {
        title: "300 bucks",
        src: "/test-react/samples/300 bucks.mp3",
      },
      {
        title: "Ahhh",
        src: "/test-react/samples/Ahhh.mp3",
      },
      {
        title: "Ahhh3",
        src: "/test-react/samples/Ahhh3.mp3",
      },
      {
        title: "Ahhh4",
        src: "/test-react/samples/Ahhh4.mp3",
      },
      {
        title: "Ahhh5",
        src: "/test-react/samples/Ahhh5.mp3",
      },
      {
        title: "Ahhhh2",
        src: "/test-react/samples/Ahhhh2.mp3",
      },
      {
        title: "As we can",
        src: "/test-react/samples/As we can.mp3",
      },
      {
        title: "Bondage gay website",
        src: "/test-react/samples/Bondage gay website.mp3",
      },
      {
        title: "Boss of this gym",
        src: "/test-react/samples/Boss of this gym.mp3",
      },
      {
        title: "Boy next door",
        src: "/test-react/samples/Boy next door.mp3",
      },
      {
        title: "Dangeon master",
        src: "/test-react/samples/Dangeon master.mp3",
      },
      {
        title: "Deep dark fantasys",
        src: "/test-react/samples/Deep dark fantasys.mp3",
      },
      {
        title: "Do you like what you see",
        src: "/test-react/samples/Do you like what you see.mp3",
      },
      {
        title: "Fuck you",
        src: "/test-react/samples/Fuck you.mp3",
      },
      {
        title: "Fucking slaves",
        src: "/test-react/samples/Fucking slaves.mp3",
      },
      {
        title: "I am an artist",
        src: "/test-react/samples/I am an artist.mp3",
      },
      {
        title: "Punch1",
        src: "/test-react/samples/Punch1.mp3",
      },
      {
        title: "Selebraite",
        src: "/test-react/samples/Selebraite.mp3",
      },
    ],
  },
  Header: {
    links: [
      {
        href: navigation.MainPage,
        text: "Главная",
      },
      {
        href: navigation.PageDice,
        text: "Кубики",
      },
      {
        href: navigation.GachiSoundPage,
        text: "♂Gachi♂",
      },
      {
        href: navigation.TestFormPage,
        text: "Инпуты",
      },
    ],
  },
  Catalog: {
    products: [
      //Chaos
      {
        image: "./images/Chaos_Demons_Khorne.jpg",
        name: "Chaos Demons Khorne",
        price: 8000,
        category: "Chaos",
      },
      {
        image: "./images/Chaos_Gors.jpg",
        name: "Chaos Gors",
        price: 3000,
        category: "Chaos",
      },
      {
        image: "./images/Chaos_Nurgles.jpg",
        name: "Chaos Nurgles",
        price: 4500,
        category: "Chaos",
      },
      {
        image: "./images/Chaos_Pink_Horrors.jpg",
        name: "Chaos Pink Horrors",
        price: 4000,
        category: "Chaos",
      },
      {
        image: "./images/Chaos_Blue_Horrors.jpg",
        name: "Chaos Blue Horrors",
        price: 4000,
        category: "Chaos",
      },
      //Dwarfs
      {
        image: "./images/Dwarfs_Arkanauts.jpg",
        name: "Dwarfs Arkanauts",
        price: 5000,
        category: "Dwarfs",
      },
      {
        image: "./images/Dwarfs_Berserks.jpg",
        name: "Dwarfs Berserks",
        price: 6000,
        category: "Dwarfs",
      },
      {
        image: "./images/Dwarfs_Hearthguard.jpg",
        name: "Dwarfs Hearthguard",
        price: 3000,
        category: "Dwarfs",
      },
      {
        image: "./images/Dwarfs_Ironbreakers.jpg",
        name: "Dwarfs Ironbreakers",
        price: 5000,
        category: "Dwarfs",
      },
      {
        image: "./images/Dwarfs_Skyriggers.jpg",
        name: "Dwarfs Skyriggers",
        price: 3000,
        category: "Dwarfs",
      },
      //Eternal
      {
        image: "./images/Eternals_Judicators.jpg",
        name: "Eternals Judicators",
        price: 5500,
        category: "Eternals",
      },
      {
        image: "./images/Eternals_Liberators.jpg",
        name: "Eternals Liberators",
        price: 7000,
        category: "Eternals",
      },
      {
        image: "./images/Eternals_Paladins.jpg",
        name: "Eternals Paladins",
        price: 3000,
        category: "Eternals",
      },
      {
        image: "./images/Eternals_Stormcast.jpg",
        name: "Eternals Stormcast",
        price: 6000,
        category: "Eternals",
      },
      //Goblins
      {
        image: "./images/Goblins_Arachnarok_Spider.jpg",
        name: "Goblins Arachnarok Spider",
        price: 5000,
        category: "Goblins",
      },
      {
        image: "./images/Goblins_Fanatics.jpg",
        name: "Goblins Fanatics",
        price: 5000,
        category: "Goblins",
      },
      {
        image: "./images/Goblins_Gloomspite_Gitz.jpg",
        name: "Goblins Gloomspite Gitz",
        price: 9000,
        category: "Goblins",
      },
      {
        image: "./images/Goblins_Gobbapalooza.jpg",
        name: "Goblins Gobbapalooza",
        price: 4000,
        category: "Goblins",
      },
      {
        image: "./images/Goblins_Grots.jpg",
        name: "Goblins Grots",
        price: 4000,
        category: "Goblins",
      },
      {
        image: "./images/Goblins_Squig_Hoppers.jpg",
        name: "Goblins Squig Hoppers",
        price: 6000,
        category: "Goblins",
      },
      //Orks
      {
        image: "./images/Orks_Ironjawz.jpg",
        name: "Orks Ironjawz",
        price: 6000,
        category: "Orks",
      },
      {
        image: "./images/Orks_Orruk_Ardboyz.jpg",
        name: "Orks Orruk Ardboyz",
        price: 7000,
        category: "Orks",
      },
      {
        image: "./images/Orks_Orruk_Brutes.jpg",
        name: "Orks Orruk Brutes",
        price: 5000,
        category: "Orks",
      },
      {
        image: "./images/Orks_Orruk_Maw_Krusha.jpg",
        name: "Orks Orruk Maw Krusha",
        price: 9000,
        category: "Orks",
      },
      {
        image: "./images/Orks_Savage_Orruks.jpg",
        name: "Orks Savage Orruks",
        price: 6500,
        category: "Orks",
      },
    ],
  },
};
