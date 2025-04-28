import { AppConfig } from '../utils/AppConfig';

const FooterCopyright = () => (
  <div>
    © {new Date().getFullYear()} {AppConfig.site_name}. All rights reserved.
  </div>
);

export { FooterCopyright };
