
import { h } from 'virtual-dom';
import { withPluginApi } from 'discourse/lib/plugin-api';

export default {
  name: 'header-links',

  initialize() {
    withPluginApi('0.8.20', api => {
      const links = settings.header_links;

      if (!links.length) {
        return;
      }

      const html = links
        .split('|')
        .map(link => {
          const [
            text,
            href,
          ] = link
            .split(',')
            .map(x => x.trim());

          return h(
            'li.headerLink',
            h('a', { href }, text)
          )
        });

      api.decorateWidget('header-buttons:before', helper =>
        helper.h('ul.header-links', html)
      );
    });
  },
};