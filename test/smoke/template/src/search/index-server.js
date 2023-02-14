const React = require('react');
const { common } = require('../../common/index.js');
const logo = require('./images/1.jpeg');
const logo1 = require('./images/150.png');
const largeNumber = require('large-number-laffy');
require('./search.less');

const Index = () => {
  // const [Text, setText] = React.useState(null);

  return (
    <div className="search-text">
      hello react www
      {common()}
      {largeNumber('999', '1')}
      <img src={logo} />
      <img src={logo1} />
    </div>
  );
};

module.exports = <Index />;
