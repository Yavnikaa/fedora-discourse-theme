
import { h } from 'virtual-dom';
import { withPluginApi } from 'discourse/lib/plugin-api';

export default {
  name: 'header-links',

  initialize() {
    withPluginApi('0.8.20', api => {
      api.decorateWidget('header-buttons:before', helper =>
        helper.h('ul.header-links', h(
          'li.headerLink',
          h(
            'a',
            { href: settings.code_of_conduct_link },
            I18n.t(themePrefix('header.code_of_conduct'))
          )
        ))
      );
    });
  },
};