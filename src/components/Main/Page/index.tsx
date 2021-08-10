import React from 'react';
import { useTranslation } from 'react-i18next';

import Section1 from '@/components/Main/Page/Section1';
import Section2 from '@/components/Main/Page/Section2';

interface Props {
  title: string;
}

const Page = ({ title }: Props): JSX.Element => {
  const { t } = useTranslation();

  return (
    <div>
      <Section1 title={ title }>
        { t('PAGE_DESCRIPTION_S1') }
      </Section1>
      <Section2 title={ t('PAGE_TITLE_S2') }>
        { t('PAGE_DESCRIPTION_S2') }
      </Section2>
    </div>
  );
};

export default Page;
