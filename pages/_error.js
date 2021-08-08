function Error({ statusCode }) {
  return (
    <p>
      {statusCode
        ? `Un error ${statusCode} ha ocurrido`
        : `Ha ocurrido un error el cliente`}
    </p>
  );
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return statusCode;
};

export default Error;
