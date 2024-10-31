import { Modal } from 'semantic-ui-react';
import style from './BasicModal.module.scss';

type MyComponentProps = {
    children: React.ReactNode,
    show: boolean,
    onClose: ()=> boolean,
    title: string
};

export function BasicModal({ children, show, onClose, title }: MyComponentProps) {


    return (
        <Modal open={show} onClose={onClose} size="small">
            <Modal.Header>{title}</Modal.Header>
            <Modal.Content>
                {children}
            </Modal.Content>
        </Modal>
    );
}
