export type TContactForm = {
  name: { value: string; warning: boolean };
  organization: { value: string; warning: boolean };
  email: { value: string; warning: boolean };
  mobile: { value: string; warning: boolean };
  message: { value: string; warning: boolean };
};