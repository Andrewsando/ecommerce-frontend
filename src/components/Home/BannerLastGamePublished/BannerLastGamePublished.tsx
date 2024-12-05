'use client';
import { Game } from "@/api";
import { useEffect, useState } from "react";
import { Image, Container } from "semantic-ui-react";
import { DateTime } from 'luxon';
import { fn } from '@/utils/functions';
import { Label } from "@/components/Shared";
import Link from 'next/link';
import styles from './BannerLastGamePublished.module.scss';

const gameCtrl = new Game();

interface Wallpaper {
  data: {
    attributes: {
      url: string;
    };
  };
}

interface GameAttributes {
  wallpaper: Wallpaper;
  discount: number;
  releaseDate: string;
  price: number;
  slug: string;
  title: string;
}

interface GameData {
  id: string;
  attributes: GameAttributes;
}

export function BannerLastGamePublished() {
  const [game, setGame] = useState<GameData | null>(null);

  useEffect(() => {
    (async () => {
      try {
        const response = await gameCtrl.getLastPublished();
        setGame(response.data[0]);
        console.log(game);
        
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  if (!game) return null;

  const wallpaper = game.attributes.wallpaper;
  const releaseDate = new Date(game.attributes.releaseDate).toISOString();
  const price = fn.calcDiscountedPrice(game.attributes.price, game.attributes.discount);

  return (
    <div className={styles.container}>
      <Image src={wallpaper.data.attributes.url} className={styles.wallpaper} />
      <Link className={styles.infoContainer} href={game.attributes.slug}>
        <Container>
          <span className={styles.date}>
            {DateTime.fromISO(releaseDate).minus({ days: 1 }).toRelative()}
          </span>

          <h2>{game.attributes.title}</h2>
          <p>$ {game.attributes.price}USD</p>
          <Label.Discount>{game.attributes.discount}</Label.Discount>
          <span className={styles.finalPrice}>{price}</span>
        </Container>
      </Link>
    </div>
  );
}
