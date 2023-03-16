interface IEnvDisplayProps {
  fooValue: string | number;
  barValue: string | number;
}

const EnvDisplay: React.FC<IEnvDisplayProps> = ({ fooValue, barValue }) => {
  return (
    <div>
      <div>The value of FOO is: {fooValue}</div>
      <div>The value of BAR is: {barValue}</div>
    </div>
  );
};

export default EnvDisplay;
