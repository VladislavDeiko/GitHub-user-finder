import { InfoItem, InfoItemProps } from 'components/InfoItem';
import { LocalGitHubUser } from 'types';
import styles from './UserInfo.module.scss';

import { ReactComponent as IconCompany} from "assets/icon-company.svg"
import { ReactComponent as IconLocation} from "assets/icon-location.svg"
import { ReactComponent as IconTwitter} from "assets/icon-twitter.svg"
import { ReactComponent as IconWebsite} from "assets/icon-website.svg"

interface UserInfoProps extends Pick<LocalGitHubUser, "blog" | "company" | "location" | "twitter"> { }

export const UserInfo = ({ blog, company, location, twitter }: UserInfoProps) => {

  const items: InfoItemProps[]= [
    {
      icon: <IconLocation/>,
      text: location
    },
    {
      icon: <IconWebsite/>,
      text: blog,
      isLink: true
    },
    {
      icon: <IconCompany/>,
      text: company,
    },
    {
      icon: <IconTwitter/>,
      text: twitter,
    },
  ]

  return(
    <div className={styles.userInfo} >
      {items.map((item, index) => (
        <InfoItem {...item} key={index}/>
      ))}
    </div>
  );
};
