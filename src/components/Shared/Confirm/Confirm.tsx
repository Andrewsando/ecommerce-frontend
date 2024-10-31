import { Confirm as ConfirmSU, ConfirmProps } from "semantic-ui-react";

interface MyConfirmProps extends ConfirmProps {

}

export function Confirm(props: MyConfirmProps) {
  const { ...rest } = props;
  return <ConfirmSU className="confirm" size="mini" {...rest} />;
}
