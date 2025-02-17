import { Skill } from "./Skills.type";
import JSLogo from '@assets/logo/js.png';
import PHPLogo from '@assets/logo/php.png';
import JavaLogo from '@assets/logo/java.png';
import LaraveLogo from '@assets/logo/laravel.png';
import CodeigniterLogo from '@assets/logo/codeigniter.png';
import ReactJSLogo from '@assets/logo/reactjs.png';
import NestJSLogo from '@assets/logo/nestjs.png';
import ExpressJSLogo from '@assets/logo/express.png';
import TailwindLogo from '@assets/logo/tailwind.png';
import BootstrapLogo from '@assets/logo/bootstrap.png';
import MySQLLogo from '@assets/logo/mysql.png';
import SQLServer from '@assets/logo/sqlserver.png';
import PostgreeLogo from '@assets/logo/postgree.png';
import GitlabLogo from '@assets/logo/gitlab.png';
import GithubLogo from '@assets/logo/github.png';
import DockerLogo from '@assets/logo/docker.png';
import RedisLogo from '@assets/logo/redis.png';
import RabbitMQLogo from '@assets/logo/rabbitmq.png';

export const programmingLanguages: Skill[] = [
    {
        label: 'JavaScript',
        logo: JSLogo
    },
    {
        label: 'PHP',
        logo: PHPLogo
    },
    {
        label: 'Java',
        logo: JavaLogo
    },
];

export const frameworks: Skill[] = [
    {
        label: 'Laravel',
        logo: LaraveLogo
    },
    {
        label: 'Codeigniter',
        logo: CodeigniterLogo
    },
    {
        label: 'ReactJS',
        logo: ReactJSLogo
    },
    {
        label: 'React Native',
        logo: ReactJSLogo
    },
    {
        label: 'NestJS',
        logo: NestJSLogo
    },
    {
        label: 'ExpressJS',
        logo: ExpressJSLogo
    },
    {
        label: 'TailwindCSS',
        logo: TailwindLogo
    },
    {
        label: 'Bootstrap',
        logo: BootstrapLogo
    },
];

export const dbms: Skill[] = [
    {
        label: 'MySQL',
        logo: MySQLLogo
    },
    {
        label: 'Microsoft SQL Server',
        logo: SQLServer
    },
    {
        label: 'Postgree',
        logo: PostgreeLogo
    },
];

export const gits: Skill[] = [
    {
        label: 'Gitlab',
        logo: GitlabLogo
    },
    {
        label: 'Github',
        logo: GithubLogo
    },
];

export const devops: Skill[] = [
    {
        label: 'Docker',
        logo: DockerLogo
    },
    {
        label: 'Redis',
        logo: RedisLogo
    },
    {
        label: 'RabbitMQ',
        logo: RabbitMQLogo
    },
];