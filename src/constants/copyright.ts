export const HeaderContent = {
  nav: {
    aboutUs: "О нас",
    cases: "Кейсы",
    feedback: "Обратная связь",
  },
  button: "Войти",
};

export const HeroContent = {
  h1: "Таск-трекер для креативных команд",
  paragraf:
    "Создавайте доски, приглашайте коллег и партнеров, работайте совместно над задачами!",
  spans: {
    span_1: "Бесплатно",
    span_2: "Без привязки карты",
    span_3: "2000+ пользователей",
  },
  input: "Электронная почта",
  button: "Совместная работа",
  popup_1: "А это вы",
};

export const MainContent = {
  block_1: {
    h2: "Вся информация как на ладони",
    p: "единая строка поиска для всех проектов - где бы ни была задача, вы быстро ее найдете",
  },

  block_2: {
    h2: "Ничто не мешает полету мысли",
    p: "фиксируйте новые идеи в один клик, прикрепляйте файлы и подробные описания сути задач",
  },

  block_3: {
    h2: "Порядок в подарок",
    p: "задачи удобно структурировать с помощью чек-листов, меток и пользовательских полей",
    span_1: "обновляйте статус задачи ",
    span_2: "следите за сроками дедлайнов",
    span_3: "отправляйте завершенные задачи в архив ",
  },

  block_4: {
    h2: "Совместная работа на одной доске",
    p: "приглашайте коллег, бизнес-партнеров и заказчиков ",
  },

  block_5: {
    h2: "Настройка под вас ",
    p: "устанавливайте персональный фон для каждого проекта",
  },
};

export const CasesContent = {
  "button 1": "Product marketing",
  "button 2": "Growth marketing",
  "button 3": "Creative",
  "button 4": "Marketing",
  "button 5": "PR",

  h2: "Создание лендинга",
  p: "Заведите доску, пригласите дизайнера, верстальщика и маркетолога, проведите брейншторм и зафиксируйте все идеи на доске, в колонке «Бэклог», приоритизируйте идеи - с помощью меток или отдельных колонок, наиболее приоритетным - назначьте дедлайны и передайте в работу исполнителям",
  listContent: [
      {
        text: ""
      },
      {
        text: ""
      }

  ]
};

export const FooterContent = {
  h2: "Обратная связь",
  input_1: "Электронная почта",
  input_2: "О чем хотите расссказать?",
  button: "отправить",
};

const media = "(max-width: 360px)";

export const PictureContent = {
  hero: {
    pen: {
      imgAttr: {
        src: "src/assets/img/hero/pen.png",
        alt: "pen",
      },

      sources: [
        {
          srcSet: "src/assets/img/hero/pen-mobile.png",
          media: media,
        },
      ],
    },
  },

  about: {
    mogu_people: {
      imgAttr: {
        src: "src/assets/img/about/mogu_people.png",
        alt: "mogu-people",
      },

      sources: [
        {
          srcSet: "src/assets/img/about/mogu_people_mobile.png",
          media: media,
        },
      ],
    },

    artical_1: {
      imgAttr: {
        src: "src/assets/img/about/artical-1.png",
        alt: "artical-1",
      },

      sources: [
        {
          srcSet: "src/assets/img/about/artical-1-mobile.png",
          media: media,
        },
      ],
    },

    artical_2: {
      imgAttr: {
        src: "src/assets/img/about/artical-2.png",
        alt: "artical-2",
      },

      sources: [
        {
          srcSet: "src/assets/img/about/artical-2-mobile.png",
          media: media,
        },
      ],
    },

    artical_3: {
      imgAttr: {
        src: "src/assets/img/about/artical-3.png",
        alt: "artical-3",
      },

      sources: [
        {
          srcSet: "src/assets/img/about/artical-3-mobile.png",
          media: media,
        },
      ],
    },

    between: {
      imgAttr: {
        src: "src/assets/img/about/between.png",
        alt: "mobile",
      },

      sources: [
        {
          srcSet: "src/assets/img/about/between-mobile.png",
          media: media,
        },
      ],
    },

    separator: {
      imgAttr: {
        src: "src/assets/img/about/separator.png",
        alt: "mobile",
      },

      sources: [
        {
          srcSet: "src/assets/img/about/separator-mobile.png",
          media: media,
        },
      ],
    },
  },

  cases: {
    cases: {
      imgAttr: {
        src: "src/assets/img/cases/cases.png",
        alt: "cases",
      },

      sources: [
        {
          srcSet: "src/assets/img/cases/cases-mobile.png",
          media: media,
        },
      ],
    },
  },

  footer: {
    cat: {
      imgAttr: {
        src: "src/assets/img/footer/cat.svg",
        alt: "cat",
      },

      sources: [
        {
          srcSet: "src/assets/img/footer/cat-mobile.svg",
          media: media,
        },
      ],
    },
  },
};
