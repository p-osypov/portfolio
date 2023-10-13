import { Component } from '@/components/footer/footer.styles';
import pkg from '@/../package.json';
function Footer() {
  return (
    <Component.Container>
      <Component.Version>v{pkg.version}</Component.Version>
    </Component.Container>
  );
}
export default Footer;
