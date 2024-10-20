
import { Image, Icon, Input } from "semantic-ui-react"
import { useEffect, useState } from "react";
import { Platform } from "@/api"
import { map } from "lodash";
import classNames from "classnames";
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import styles from "./Menu.module.scss"
import Link from "next/link";

interface MenuProps {
    isOpenSearch: boolean;
}

interface Platform {
    id: string;
    attributes: {
        slug: string;
        images: {
            data: {
                attributes: {
                    url: string;
                };
            };
        };
        Title: string;
    };
}

const platformCtrl = new Platform();

export function Menu({ isOpenSearch }: MenuProps) {
    const [platforms, setPlatforms] = useState(null);
    const [showSearch, setShowSearch] = useState(false);
    const openCloseSearch = () => setShowSearch(prevState => !prevState)

    useEffect(() => {
        (async () => {
            try {
                const response = await platformCtrl.getAll();
                setPlatforms(response.data)
            } catch (error) {
                console.log(error)
            }
        })()
    }, [])

    return (
        <div className={styles.platforms}>
            {map(platforms, (platform: Platform) => (
                < Link key={platform.id} href={`/games/${platform.attributes.slug} `}>
                    <Image src={platform.attributes.images.data.attributes.url} />
                    {platform.attributes.Title}
                </Link>
            ))}

            <button
                className={styles.search}
                onClick={openCloseSearch}>
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
                />
                <CloseIcon
                    className={styles.closeInput}
                    onClick={openCloseSearch}
                />
            </div>
        </div>
    )
}