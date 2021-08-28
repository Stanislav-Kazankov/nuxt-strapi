import _ from 'lodash';

export default (srcs) => {
  let srcset = '';
  if (!_.isEmpty(srcs)) {
    srcset = _(srcs).orderBy(
      'dppx', 'desc',
    ).map(
      ({ dppx, image }) => (
        `${process.env.baseUrl}`
        + `${image.url} ${dppx}x`
      ),
    ).join(', ');
  }

  return srcset;
};
