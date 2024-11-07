import { Image, Icon, Input } from "semantic-ui-react";
import { useEffect, useState } from "react";
import { Platform as PlatformAPI } from "@/api"; // Renombrado aquí
import { map } from "lodash";
import { useRouter, useSearchParams } from "next/navigation";
import classNames from "classnames";
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import styles from "./Menu.module.scss";
import Link from "next/link";

interface MenuProps {
  isOpenSearch: boolean,
  params: { platform: string }
}

interface Platform {
  id: string;
  attributes: {
    slug: string;
    icon: {
      data: {
        attributes: {
          url: string;
        };
      };
    };
    Title: string;
  };
}

const platformCtrl = new PlatformAPI();

export function Menu({ isOpenSearch, params }: MenuProps) {
  const [platforms, setPlatforms] = useState<Platform[] | null>(null);
  const [showSearch, setShowSearch] = useState(isOpenSearch);
  const [searchText, setSearchText] = useState("");
  const searchParams = useSearchParams();
  const openCloseSearch = () => setShowSearch(prevState => !prevState);
  const router = useRouter()


  useEffect(() => {
    (async () => {
      try {
        const response = await platformCtrl.getAll();
        
        setPlatforms(response.data);
        
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  useEffect(() => {
    const search = searchParams.get('s') || "";
    setSearchText(search);
  }, []);

  const onSearch = (text: string) => {
    setSearchText(text)
    router.replace(`/search?s=${text}`)
  }

  return (
    <div className={styles.platforms}>
      {map(platforms, (platform: Platform) => (
        <Link key={platform.id} href={`/games/${platform.attributes.slug}`}>
          <Image src={platform.attributes.icon.data.attributes.url} /> 
          {platform.attributes.Title}
        </Link>
      ))}
      <button
        className={styles.search}
        onClick={openCloseSearch}
      >
        <SearchIcon />
      </button>
      <div className={classNames(styles.inputContainer, {
        [styles.active]: showSearch,
      })}>
        <Input
          id="search-games"
          placeholder="Search"
          className={styles.input}
          focus={true}
          onChange={(_, data) => onSearch(data.value)}
          value={searchText}
        />
        <CloseIcon
          className={styles.closeInput}
          onClick={openCloseSearch}
        />
      </div>
    </div>
  );
}
