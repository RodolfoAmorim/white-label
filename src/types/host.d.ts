export interface HostConfig {
  id: string;
  name: string;
  host: string;
  seo: {
    title: string;
    description: string;
    themeColor: string;
  };
  theme: {
    main50: string;
    main100: string;
    main200: string;
    main300: string;
    main400: string;
    main500: string;
    main600: string;
    main700: string;
    main800: string;
    main900: string;
    main950: string;
    gray50: string;
    gray100: string;
    gray200: string;
    gray300: string;
    gray400: string;
    gray500: string;
    gray600: string;
    gray700: string;
    gray800: string;
    gray900: string;
    gray950: string;
  };
  assets: {
    logo: string;
    favicon: string;
  };
}
