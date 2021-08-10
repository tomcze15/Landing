import React from 'react';
import { useTranslation } from 'react-i18next';

import Section1 from '@/components/Main/Page/Section1';

const NotFound = (): JSX.Element => {
  const { t } = useTranslation();

  return (
    <Section1 title="404">
      { t('NOT_FOUND_DESCRIPTION') }
    </Section1>
  );
};

export default NotFound;
