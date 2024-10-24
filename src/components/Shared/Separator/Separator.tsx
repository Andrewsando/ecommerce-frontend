type SeparatorProps = {
    height: number;
  };
  
  export function Separator({ height }: SeparatorProps) {
    return <div style={{ height }} />;
  }