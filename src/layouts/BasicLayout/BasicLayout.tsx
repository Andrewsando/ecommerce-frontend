import styles from "./BasicLayout.module.scss"
import { Container } from "semantic-ui-react";
import classNames from "classnames";
import { TopBar, Footer} from "@/components/Layout";

type PropsTypes = {
    children?: React.ReactNode
        isOpenSearch?: boolean
        isContainer?: boolean
        relative?: boolean
}


export function BasicLayout(props: PropsTypes) {


    const { children,
        isOpenSearch = false,
        isContainer = false,
        relative = false,
    } = props;

    return (
        <>
           
           <TopBar isOpenSearch={isOpenSearch}/>
            <Container fluid>
                <div className={classNames({ [styles.relative]: relative })}>
                    {isContainer ? <Container>{children}</Container> : children}
                </div>
            </Container>
           <Footer/>
        </>
    );
}