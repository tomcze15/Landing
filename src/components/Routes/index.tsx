import React from 'react';
import { useTranslation } from 'react-i18next';
import { Redirect, Route, Switch } from 'react-router-dom';

import Home from '@/components/Main/Home';
import Page from '@/components/Main/Page';
import Page404 from '@/components/Main/Page404';

const Routes = (): JSX.Element => {
  const { t } = useTranslation();

  return (
    <Switch>
      <Route
        component={ Home }
        exact
        path="/"
      />
      <Route
        component={ (): JSX.Element => <Page title={ t('PAGES_TITLE') } /> }
        exact
        path="/pages"
      />
      <Route
        component={ (): JSX.Element => <Page title={ t('PORTFOLIO_TITLE') } /> }
        exact
        path="/portfolio"
      />
      <Route
        component={ (): JSX.Element => <Page title={ t('SHOP_TITLE') } /> }
        exact
        path="/shop"
      />
      <Route
        component={ (): JSX.Element => <Page title={ t('BLOG_TITLE') } /> }
        exact
        path="/blog"
      />
      <Route
        component={ (): JSX.Element => <Page title={ t('ELEMENTS_TITLE') } /> }
        exact
        path="/elements"
      />
      <Route
        component={ Page404 }
        path="/notFound"
      />
      <Redirect to="/notFound" />
    </Switch>
  );
};

export default Routes;
