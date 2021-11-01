declare module "*.svg" {
  import React from "react";
  const content: React.FC<
    React.SVGAttributes<SVGSVGElement> & { title?: string }
  >;
  export default content;
}
