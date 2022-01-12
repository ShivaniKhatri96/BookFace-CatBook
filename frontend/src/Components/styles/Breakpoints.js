export const Size = {
    //very small devices
    xs: "280px",
    //Small devices (landscape phones, 576px and up)
    sm: "576px",
    // Medium devices (tablets, 768px and up)
    md: "768px",
    // Large devices (desktops, 992px and up)
    lg: "992px",
    // X-Large devices (large desktops, 1200px and up)
    xl: "1200px",
    // XX-Large devices (larger desktops, 1400px and up)
    xxl: "1400px",
  };
  export const DeviceMin = {
    xs: `(min-width: ${Size.xs})`,
    sm: `(min-width: ${Size.sm})`,
    md: `(min-width: ${Size.md})`,
    lg: `(min-width: ${Size.lg})`,
    xl: `(min-width: ${Size.xl})`,
    xxl: `(min-width: ${Size.xxl})`,
  };
  export const DeviceMax = {
    xs: `(max-width: ${Size.xs})`,
    sm: `(max-width: ${Size.sm})`,
    md: `(max-width: ${Size.md})`,
    lg: `(max-width: ${Size.lg})`,
    xl: `(max-width: ${Size.xl})`,
    xxl: `(max-width: ${Size.xxl})`,
  };