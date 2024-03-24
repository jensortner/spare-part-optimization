type CalcProps = {
  avgBreakRate: number;
  spareCost: number;
  machineCost: number;
};

export const CalcSPO = ({
  avgBreakRate,
  spareCost,
  machineCost,
}: CalcProps) => {
  console.log(avgBreakRate);
  console.log(spareCost);
  console.log(machineCost);
  const s = 1;

  return (
    <>
      <h1>Recommended stock level: {s}</h1>
    </>
  );
};
