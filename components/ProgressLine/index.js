import { Fragment } from "react";
import { Line } from "rc-progress";
import { theme } from "../../tailwind.config";

function ProfressLine() {
  return (
    <Fragment>
      <Line
        className="rounded-md bg-green-secta"
        percent={100}
        strokeWidth={1}
        strokeColor={theme.extend.colors.green.DEFAULT}
        trailWidth={2}
        trailColor={theme.extend.colors.green.secta}
      />
    </Fragment>
  );
}

export default ProfressLine;
