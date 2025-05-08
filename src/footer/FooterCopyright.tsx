const FooterCopyright = () => (
  <div>
    © {new Date().getFullYear()}{' '}
    <a
      href="https://getremna.com"
      className="hover:text-primary-500 hover:underline"
    >
      Manchaug Dynamics
    </a>
    . All rights reserved.
  </div>
);

export { FooterCopyright };
