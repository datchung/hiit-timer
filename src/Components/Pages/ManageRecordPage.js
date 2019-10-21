import React, {useEffect, useState} from 'react';
import {withRouter} from 'react-router-dom';
import ManageRecord from '../Smart/ManageRecord';
import T from '../../Localization/i18n';

function ManageRecordPage(props) {
  const [subTitle, setSubTitle] = useState("");

  useEffect(() => {
    const id = props.match.params.id;
    var recordById = props.records.find(t => t.id === id);
    setSubTitle(recordById ? T.t("editRecord") : T.t("createRecord"));
  }, [props.match.params.id]);

  function onBackClick() {
    props.history.goBack();
  }

  return (
    <React.Fragment>
      <div className="columns is-mobile">
        <div className="column">
          <button className="button" onClick={onBackClick}>
            {T.t("back")}
          </button>
        </div>
      </div>
      <div className="columns is-mobile">
        <div className="column">
          <h5 className="title is-5">{subTitle}</h5>
        </div>
      </div>

      <ManageRecord {...props} />
    </React.Fragment>
  );
}

export default withRouter(ManageRecordPage);