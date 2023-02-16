import { UserStat, UserStatProps } from 'components/UserStat';
import styles from './UserCard.module.scss';

interface UserCardProps extends UserStatProps { }

export const UserCard = (props: UserCardProps) => (
  <div className={styles.userCard} >
    <UserStat 
      repos={props.repos}
      followers={props.followers}
      following={props.following}
    />
  </div>
);
