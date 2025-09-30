import { mockUsers } from './mockUsers';

const user = mockUsers;

export const mockViewList = {
  totalItems: 11,
  pageSize: 8,
  totalPages: 2,
  pages: [
    {
      page: 1,
      hasPrevPage: false,
      hasNextPage: true,
      nextPage: 2,
      prevPage: null,
      data: [
        {
          id: 1,
          image: '/image/avatar-2.jpg',
          header: 'Lizard',
          title: 'title',
          content: 'Lizards are a widespread group of ',
          author: user[3],
          publish: true,
        },
        {
          id: 2,
          image: '',
          header: 'Lizard',
          title: 'title',
          content: 'Lizards are a widespread group of ',
          author: user[3],
          publish: false,
        },
        {
          id: 3,
          image: '',
          header: 'Lizard',
          title: 'title',
          content: 'Lizards are a widespread group of ',
          author: user[2],
          publish: true,
        },
        {
          id: 4,
          image: '',
          header: 'Lizard',
          title: 'title',
          content: 'Lizards are a widespread group of ',
          author: user[2],
          publish: true,
        },
        {
          id: 5,
          image: '',
          header: 'Lizard',
          title: 'title',
          content: 'Lizards are a widespread group of ',
          author: user[3],
          publish: true,
        },
        {
          id: 6,
          image: '',
          header: 'Lizard',
          title: 'title',
          content: 'Lizards are a widespread group of ',
          author: user[4],
          publish: true,
        },
        {
          id: 7,
          image: '',
          header: 'Lizard',
          title: 'title',
          content: 'Lizards are a widespread group of ',
          author: user[2],
          publish: true,
        },
        {
          id: 8,
          image: '',
          header: 'Lizard',
          title: 'title',
          content: 'Lizards are a widespread group of ',
          author: user[2],
          publish: true,
        },
      ],
    },
    {
      page: 2,
      hasPrevPage: true,
      hasNextPage: false,
      nextPage: null,
      prevPage: 1,
      data: [
        {
          id: 9,
          image: '',
          header: 'Lizard',
          title: 'title',
          content: 'Lizards are a widespread group of ',
          author: user[4],
          publish: true,
        },
        {
          id: 10,
          image: '',
          header: 'Lizard',
          title: 'title',
          content: 'Lizards are a widespread group of ',
          author: user[2],
          publish: true,
        },
        {
          id: 11,
          image: '/image/avatar-2.jpg',
          header: 'Lizard',
          title: 'title',
          content: 'Lizards are a widespread group of ',
          author: user[1],
          publish: true,
        },
      ],
    },
  ],
};

// import { users } from './mockUsers';
// import Avatar1 from '../assets/Avatar/avatar-1.jpg';
// import Avatar2 from '../assets/Avatar/avatar-2.jpg';
// import Avatar3 from '../assets/Avatar/avatar-3.jpg';

// export const mockViewList = {
//   totalItems: 18,
//   pageSize: 8,
//   totalPages: 3,
//   pages: [
//     {
//       page: 1,
//       hasPrevPage: false,
//       hasNextPage: true,
//       nextPage: 2,
//       prevPage: null,
//       data: [
//         {
//           id: 1,
//           title: 'React',
//           content: 'React is a popular frontend library for building UIs.',
//           author: {
//             id: 1,
//             firstName: 'John',
//             lastName: 'Doe',
//             email: 'john.doe@email.com',
//             avatarUrl: Avatar1,
//           },
//           publish: true,
//           type: 'frontend',
//           media: {
//             mainImg: 'https://reactjs.org/logo-og.png',
//             slides: [
//               'https://miro.medium.com/max/1400/1*lO7e5wXjRX_91g6q6pk8Jw.png',
//               'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg',
//               'https://cdn.pixabay.com/photo/2017/09/01/17/09/code-2700070_1280.jpg',
//             ],
//             video: 'https://www.youtube.com/watch?v=Ke90Tje7VS0',
//           },
//         },
//         {
//           id: 2,
//           title: 'GitHub',
//           content:
//             'GitHub is a platform for version control and collaboration.',
//           author: {
//             id: 1,
//             firstName: 'John',
//             lastName: 'Doe',
//             email: 'john.doe@email.com',
//             avatarUrl: Avatar1,
//           },
//           publish: true,
//           type: 'devops',
//           media: {
//             mainImg:
//               'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png',
//             slides: [
//               'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png',
//               'https://cdn.iconscout.com/icon/free/png-256/github-153-675523.png',
//               'https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg',
//             ],
//             video: 'https://www.youtube.com/watch?v=w3jLJU7DT5E',
//           },
//         },
//         {
//           id: 3,
//           title: 'Python',
//           content:
//             'Python is a high-level programming language widely used in backend development.',
//           author: {
//             id: 6,
//             firstName: 'Linda',
//             lastName: 'Brown',
//             email: '',
//             avatarUrl: '',
//           },
//           publish: true,
//           type: 'backend',
//           media: {
//             mainImg:
//               'https://www.python.org/static/community_logos/python-logo.png',
//             slides: [
//               'https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg',
//               'https://cdn.iconscout.com/icon/free/png-256/python-2-226051.png',
//               'https://www.python.org/static/img/python-logo.png',
//             ],
//             video: 'https://www.youtube.com/watch?v=_uQrJ0TkZlc',
//           },
//         },
//         {
//           id: 4,
//           header: 'HTML & CSS',
//           title: 'Web Fundamentals',
//           content:
//             'Building clean, semantic HTML structure and styling with CSS for responsive, accessible layouts.',
//           author: {
//             id: 16,
//             firstName: 'Liam',
//             lastName: 'Turner',
//             email: '',
//             avatarUrl: '',
//           },
//           publish: true,
//           type: 'frontend',
//           media: {
//             mainImg:
//               'https://upload.wikimedia.org/wikipedia/commons/6/62/HTML5_logo_and_wordmark.svg',
//             slides: [
//               'https://upload.wikimedia.org/wikipedia/commons/6/62/HTML5_logo_and_wordmark.svg',
//               'https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg',
//               'https://www.w3.org/Icons/w3c_home',
//             ],
//             video: 'https://www.youtube.com/watch?v=UB1O30fR-EE',
//           },
//         },
//         {
//           id: 5,
//           title: 'MUI',
//           content:
//             'MUI provides React components that implement Google’s Material Design.',
//           author: {
//             id: 5,
//             firstName: 'Sara',
//             lastName: 'Connor',
//             email: '',
//             avatarUrl: '',
//           },
//           publish: true,
//           type: 'frontend',
//           media: {
//             mainImg: 'https://mui.com/static/logo.png',
//             slides: [
//               'https://mui.com/static/images/cards/contemplative-reptile.jpg',
//               'https://mui.com/static/images/cards/paella.jpg',
//               'https://mui.com/static/images/cards/kitten.jpg',
//             ],
//             video: 'https://www.youtube.com/watch?v=vyJU9efvUtQ',
//           },
//         },
//         {
//           id: 6,
//           title: 'Docker',
//           content: 'Docker is a platform for containerizing applications.',
//           author: {
//             id: 12,
//             firstName: 'Noah',
//             lastName: 'Wyle',
//             email: '',
//             avatarUrl: '',
//           },
//           publish: true,
//           type: 'devops',
//           media: {
//             mainImg:
//               'https://www.docker.com/wp-content/uploads/2022/03/Moby-logo.png',
//             slides: [
//               'https://www.docker.com/wp-content/uploads/2022/03/Moby-logo.png',
//               'https://cdn.iconscout.com/icon/free/png-256/docker-7-1175079.png',
//               'https://miro.medium.com/max/1400/1*CbR3b5qUMjzLz2A7CBHD8w.png',
//             ],
//             video: 'https://www.youtube.com/watch?v=3c-iBn73dDE',
//           },
//         },
//         {
//           id: 7,
//           title: 'C#',
//           content:
//             'C# is a modern object-oriented programming language developed by Microsoft.',
//           author: {
//             id: 8,
//             firstName: 'Bob',
//             lastName: 'Marley',
//             email: '',
//             avatarUrl: '',
//           },
//           publish: true,
//           type: 'backend',
//           media: {
//             mainImg:
//               'https://upload.wikimedia.org/wikipedia/commons/7/7a/C_Sharp_logo.svg',
//             slides: [
//               'https://cdn.iconscout.com/icon/free/png-256/csharp-1-1175037.png',
//               'https://upload.wikimedia.org/wikipedia/commons/7/7a/C_Sharp_logo.svg',
//               'https://cdn.iconscout.com/icon/free/png-256/c-sharp-1-1175037.png',
//             ],
//             video: 'https://www.youtube.com/watch?v=GhQdlIFylQ8',
//           },
//         },
//         {
//           id: 8,
//           title: 'AWS',
//           content:
//             'Amazon Web Services (AWS) provides cloud computing platforms and APIs.',
//           author: {
//             id: 14,
//             firstName: 'Ethan',
//             lastName: 'Hunt',
//             email: '',
//             avatarUrl: '',
//             roles: ['registered'],
//             created: '2025-09-14T10:00:00Z',
//           },
//           publish: true,
//           type: 'devops',
//           media: {
//             mainImg:
//               'https://a0.awsstatic.com/libra-css/images/logos/aws_logo_smile_1200x630.png',
//             slides: [
//               'https://a0.awsstatic.com/libra-css/images/logos/aws_logo_smile_1200x630.png',
//               'https://cdn.iconscout.com/icon/free/png-256/aws-1869023-1583147.png',
//               'https://miro.medium.com/max/1400/1*Bn6H6n6w6x6x6x.png',
//             ],
//             video: 'https://www.youtube.com/watch?v=ulprqHHWlng',
//           },
//         },
//       ],
//     },
//     {
//       page: 2,
//       hasPrevPage: true,
//       hasNextPage: true,
//       nextPage: 3,
//       prevPage: 1,
//       data: [
//         {
//           id: 9,
//           title: 'Flask',
//           content:
//             'Flask is a lightweight Python web framework for backend development.',
//           author: {
//             id: 1,
//             firstName: 'John',
//             lastName: 'Doe',
//             email: 'john.doe@email.com',
//             avatarUrl: Avatar1,
//           },
//           publish: true,
//           type: 'backend',
//           media: {
//             mainImg:
//               'https://flask.palletsprojects.com/en/2.3.x/_images/flask-logo.png',
//             slides: [
//               'https://flask.palletsprojects.com/en/2.3.x/_images/pallets-logo.png',
//               'https://flask.palletsprojects.com/en/2.3.x/_images/flask-logo.png',
//               'https://cdn.iconscout.com/icon/free/png-256/flask-3-1175197.png',
//             ],
//             video: 'https://www.youtube.com/watch?v=Z1RJmh_OqeA',
//           },
//         },
//         {
//           id: 10,
//           title: 'SQLAlchemy',
//           content: 'SQLAlchemy is a Python ORM for database interactions.',
//           author: {
//             id: 9,
//             firstName: 'Emma',
//             lastName: 'Stone',
//             email: '',
//             avatarUrl: '',
//           },
//           publish: true,
//           type: 'backend',
//           media: {
//             mainImg: 'https://www.sqlalchemy.org/img/sqla_logo.png',
//             slides: [
//               'https://www.sqlalchemy.org/img/sqla_logo.png',
//               'https://cdn.iconscout.com/icon/free/png-256/sqlalchemy-1-1175151.png',
//               'https://upload.wikimedia.org/wikipedia/commons/5/5e/SQLAlchemy_logo.png',
//             ],
//             video: 'https://www.youtube.com/watch?v=woKYyhLCcnU',
//           },
//         },
//         {
//           id: 11,
//           title: 'ASP.NET',
//           content:
//             'ASP.NET is a Microsoft framework for building web apps and services.',
//           author: {
//             id: 10,
//             firstName: 'Liam',
//             lastName: 'Neeson',
//             email: '',
//             avatarUrl: '',
//           },
//           publish: true,
//           type: 'backend',
//           media: {
//             mainImg:
//               'https://upload.wikimedia.org/wikipedia/commons/0/0e/Microsoft_ASP.NET_Logo.png',
//             slides: [
//               'https://upload.wikimedia.org/wikipedia/commons/0/0e/Microsoft_ASP.NET_Logo.png',
//               'https://cdn.iconscout.com/icon/free/png-256/asp-net-1-1175022.png',
//               'https://miro.medium.com/max/1400/1*GH-jKcvjI3sZxT0zthk5pQ.png',
//             ],
//             video: 'https://www.youtube.com/watch?v=6cJrg1c2mPQ',
//           },
//         },
//         {
//           id: 12,
//           title: 'Angular',
//           content:
//             'Angular is a platform for building mobile and desktop web apps.',
//           author: {
//             id: 3,
//             firstName: 'Alice',
//             lastName: 'Johnson',
//             email: 'alice.johnson@email.com',
//             avatarUrl: Avatar3,
//           },
//           publish: true,
//           type: 'frontend',
//           media: {
//             mainImg:
//               'https://angular.io/assets/images/logos/angular/angular.png',
//             slides: [
//               'https://angular.io/generated/images/marketing/home/hero-angular.png',
//               'https://cdn.worldvectorlogo.com/logos/angular-icon.svg',
//               'https://upload.wikimedia.org/wikipedia/commons/c/cf/Angular_full_color_logo.svg',
//             ],
//             video: 'https://www.youtube.com/watch?v=2OHbjep_WjQ',
//           },
//         },
//         {
//           id: 13,
//           title: 'SQL Server',
//           content:
//             'Microsoft SQL Server is a relational database management system.',
//           author: {
//             id: 1,
//             firstName: 'John',
//             lastName: 'Doe',
//             email: 'john.doe@email.com',
//             avatarUrl: Avatar1,
//           },
//           publish: true,
//           type: 'backend',
//           media: {
//             mainImg:
//               'https://upload.wikimedia.org/wikipedia/commons/8/87/Microsoft_SQL_Server_logo.png',
//             slides: [
//               'https://upload.wikimedia.org/wikipedia/commons/8/87/Microsoft_SQL_Server_logo.png',
//               'https://cdn.iconscout.com/icon/free/png-256/sql-server-4-1175017.png',
//               'https://miro.medium.com/max/1400/1*kVQxajc3LVk9zj5XMiHc2w.png',
//             ],
//             video: 'https://www.youtube.com/watch?v=7V5Jv3eJ6vI',
//           },
//         },
//         {
//           id: 14,
//           title: 'PostgreSQL',
//           content:
//             'PostgreSQL is an open-source object-relational database system.',
//           author: {
//             id: 11,
//             firstName: 'Olivia',
//             lastName: 'Pope',
//             email: '',
//             avatarUrl: '',
//           },
//           publish: true,
//           type: 'backend',
//           media: {
//             mainImg:
//               'https://www.postgresql.org/media/img/about/press/elephant.png',
//             slides: [
//               'https://www.postgresql.org/media/img/about/press/elephant.png',
//               'https://cdn.iconscout.com/icon/free/png-256/postgresql-11-1175120.png',
//               'https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg',
//             ],
//             video: 'https://www.youtube.com/watch?v=qw--VYLpxG4',
//           },
//         },
//         {
//           id: 15,
//           title: 'Vite',
//           content:
//             'Vite is a fast frontend build tool for modern web projects.',
//           author: {
//             id: 17,
//             firstName: 'Mark',
//             lastName: 'Twain',
//             email: '',
//             avatarUrl: '',
//           },
//           publish: true,
//           type: 'frontend',
//           media: {
//             mainImg: 'https://vitejs.dev/logo.svg',
//             slides: [
//               'https://vitejs.dev/logo.svg',
//               'https://vitejs.dev/logo.svg',
//               'https://vitejs.dev/logo.svg',
//             ],
//             video: 'https://www.youtube.com/watch?v=kjJse1XzXqg',
//           },
//         },
//         {
//           id: 16,
//           title: 'Kubernetes',
//           content:
//             'Kubernetes is a system for automating deployment, scaling, and management of containerized apps.',
//           author: {
//             id: 13,
//             firstName: 'Sophia',
//             lastName: 'Loren',
//             email: '',
//             avatarUrl: '',
//           },
//           publish: true,
//           type: 'devops',
//           media: {
//             mainImg:
//               'https://upload.wikimedia.org/wikipedia/commons/3/39/Kubernetes_logo_without_workmark.svg',
//             slides: [
//               'https://upload.wikimedia.org/wikipedia/commons/3/39/Kubernetes_logo_without_workmark.svg',
//               'https://cdn.iconscout.com/icon/free/png-256/kubernetes-1-1175088.png',
//               'https://miro.medium.com/max/1400/1*Ht0kgK1FOO9w0yZzyGx0vA.png',
//             ],
//             video: 'https://www.youtube.com/watch?v=X48VuDVv0do',
//           },
//         },
//       ],
//     },
//     {
//       page: 3,
//       hasPrevPage: true,
//       hasNextPage: false,
//       nextPage: null,
//       prevPage: 2,
//       data: [
//         {
//           id: 17,
//           title: 'TypeScript',
//           content:
//             'TypeScript adds types to JavaScript for better maintainability.',
//           author: {
//             id: 2,
//             firstName: 'Jane',
//             lastName: 'Smith',
//             email: 'jane.smith@email.com',
//             avatarUrl: Avatar2,
//           },
//           publish: true,
//           type: 'frontend',
//           media: {
//             mainImg:
//               'https://www.typescriptlang.org/assets/images/icons/apple-touch-icon.png',
//             slides: [
//               'https://cdn.iconscout.com/icon/free/png-256/typescript-1174965.png',
//               'https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg',
//               'https://miro.medium.com/max/1400/1*D0ZqAX2gJp2qA3GBEK9S6Q.png',
//             ],
//             video: 'https://www.youtube.com/watch?v=BwuLxPH8IDs',
//           },
//         },
//         {
//           id: 18,
//           title: 'Terraform',
//           content:
//             'Terraform is an infrastructure-as-code software tool for building, changing, and versioning infrastructure safely.',
//           author: {
//             id: 15,
//             firstName: 'Mia',
//             lastName: 'Wallace',
//             email: '',
//             avatarUrl: '',
//           },
//           publish: true,
//           type: 'devops',
//           media: {
//             mainImg:
//               'https://www.terraform.io/assets/images/logo-hashicorp-4a01d6eb.svg',
//             slides: [
//               'https://www.terraform.io/assets/images/logo-hashicorp-4a01d6eb.svg',
//               'https://cdn.iconscout.com/icon/free/png-256/terraform-1-1175045.png',
//               'https://miro.medium.com/max/1400/1*hUafjK3m2yL3x.png',
//             ],
//             video: 'https://www.youtube.com/watch?v=SLauY6PpjW4',
//           },
//         },
//       ],
//     },
//   ],
// };
