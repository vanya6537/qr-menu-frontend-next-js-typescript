// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

export type MenuItem = {
  name: string;
  description: string;
  price: number;
  src: string;
};

export type Data = {
  items: MenuItem[];
  id: string;
  name: string;
}[];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  const data: Data = [
    {
      name: `Бургеры`,
      items: [
        {
          name: `ORIGINAL Бургер`,
          description: `C котлетой из говядины, сыром чеддер и соусом BBQ`,
          price: 380,
          src: `https://res.cloudinary.com/restik/image/upload/q_auto,f_auto/v1586734490/pl_restik_njk7n7e40/b4m885bdjeieouv25u8g.jpg`,
        },
        {
          name: `Двойной чизбургер`,
          description: `Сочная говяжья котлета, бекон, сыр чеддер, маринованные огурцы, томаты, карамелизированный лук, лук фри, картофель фри, кетчуп.`,
          price: 495,
          src: `https://res.cloudinary.com/restik/image/upload/q_auto,f_auto/v1586734813/pl_restik_njk7n7e40/pa0151d3nqx9hghsej5w.jpg`,
        },
        {
          name: `Роял бургер`,
          description: `Сочный бургер с мясной котлетой, беконом и сыром.`,
          price: 450,
          src: `https://res.cloudinary.com/restik/image/upload/q_auto,f_auto/v1586735554/pl_restik_njk7n7e40/bd729u7uibgr8vrq0b42.jpg`,
        },
        {
          name: `Чикенбургер`,
          description: `Куриная котлета в панировке, обжаренный бекон, сыр чеддер, маринованные огурцы, томаты, салат айсберг, картофель фри, соус карри, кетчуп.`,
          price: 390,
          src: `https://res.cloudinary.com/restik/image/upload/q_auto,f_auto/v1586734987/pl_restik_njk7n7e40/zc7bit5guudzkxouihjr.jpg`,
        },
      ],
      id: `burgery`,
    },
    {
      name: `Пицца`,
      items: [
        {
          name: `Ветчина и грибы`,
          description: `Ветчина, томатный соус, шампиньоны, моцарелла.`,
          price: 345,
          src: `https://res.cloudinary.com/restik/image/upload/q_auto,f_auto/v1586735163/pl_restik_njk7n7e40/hsj0runn3nuf0iblcy47.jpg`,
        },
        {
          name: `Гавайская`,
          description: `Цыпленок, томатный соус, моцарелла, ананасы.`,
          price: 395,
          src: `https://res.cloudinary.com/restik/image/upload/q_auto,f_auto/v1586735119/pl_restik_njk7n7e40/m13wt3nenk6q2icisauy.jpg`,
        },
        {
          name: `Мясная`,
          description: `Сыр, нежнейшее мясо и оливки.`,
          price: 450,
          src: `https://res.cloudinary.com/restik/image/upload/q_auto,f_auto/v1586736082/pl_restik_njk7n7e40/g8p68mwst8tgusfgzymp.jpg`,
        },
        {
          name: `Пепперони`,
          description: `Пикантная пепперони, томатный соус, моцарелла.`,
          price: 400,
          src: `https://res.cloudinary.com/restik/image/upload/q_auto,f_auto/v1586735398/pl_restik_njk7n7e40/uz64u7gcdn8pmn8wcf5h.jpg`,
        },
      ],
      id: `picca`,
    },
    {
      name: `Завтраки`,
      items: [
        {
          name: `Бейгл с лососем`,
          description: `Традиционно закрученная выпечка, начинённая свежими овощами и лососем слабой соли.`,
          price: 590,
          src: `https://res.cloudinary.com/restik/image/upload/q_auto,f_auto/v1586734165/pl_restik_njk7n7e40/ok3ambvpfr5zf1vo7kas.jpg`,
        },
        {
          name: `Сладкие панкейки`,
          description: `Нежные панкейки с голубикой и шоколадом.`,
          price: 190,
          src: `https://res.cloudinary.com/restik/image/upload/q_auto,f_auto/v1586734228/pl_restik_njk7n7e40/o0azumgv4qakp63lmc0p.jpg`,
        },
        {
          name: `Сладкий сэндвич с бананом и голубикой`,
          description: `Мёд, банан, голубика и поджаренные кусочки хлеба`,
          price: 250,
          src: `https://res.cloudinary.com/restik/image/upload/q_auto,f_auto/v1586734003/pl_restik_njk7n7e40/pdciee87e1n1ukipion3.jpg`,
        },
        {
          name: `Сэндвич с яйцом`,
          description: `Вкуснейший сэндвич с яйцом и авокадо`,
          price: 350,
          src: `https://res.cloudinary.com/restik/image/upload/q_auto,f_auto/v1586733958/pl_restik_njk7n7e40/qrket1porebvlado3bon.jpg`,
        },
      ],
      id: `zavtraki`,
    },
    {
      name: `Десерты`,
      items: [
        {
          name: `Кейк со свежей малиной`,
          description: `Сочный десерт со свежей малиной и шоколадным бисквитом.`,
          price: 390,
          src: `https://res.cloudinary.com/restik/image/upload/q_auto,f_auto/v1586735963/pl_restik_njk7n7e40/g9ddals36fi4jhr5a8a8.jpg`,
        },
        {
          name: `Малиновый сорбет`,
          description: `Ароматный малиновый сорбет с насыщенным ягодным вкусом.`,
          price: 230,
          src: `https://res.cloudinary.com/restik/image/upload/q_auto,f_auto/v1586735510/pl_restik_njk7n7e40/n7qoal6skotdiomjewur.jpg`,
        },
      ],
      id: `deserty`,
    },
  ];

  res.status(200).json(data);
}
