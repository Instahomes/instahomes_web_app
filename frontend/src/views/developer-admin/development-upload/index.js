import React, { useState, useEffect, useMemo } from "react";
import RowDropdown from "../../../components/developer-admin/rowDropdown";
import Base from "../../../components/developer-admin/base";
import Datatable from "../../../components/developer-admin/datatable";
import { OrangeButton } from "../../../components/developer-admin/base/styles";
import Loading from "../../../components/loading";
import { getDevelopments } from "../../../services/developer-admin/developments";
import { useHistory } from "react-router-dom";
import Helmet from "react-helmet";

const HeaderElements = () => {
  const history = useHistory();

  return (
    <React.Fragment>
      <OrangeButton
        style={{ marginLeft: "auto" }}
        onClick={() => history.push("/admin/developments/new")}
      >
        + Add New Development
      </OrangeButton>
    </React.Fragment>
  );
};

const DevelopmentUpload = React.memo((props) => {
  const [loading, setLoading] = useState(false);
  const [developments, setDevelopments] = useState([]);

  useEffect(() => {
    setLoading(true);
    getDevelopments(
      (data) => {
        setDevelopments(data);
        setLoading(false);
      },
      () => {
        setLoading(false);
      }
    );
  }, []);

  const data = useMemo(() => developments, [developments]);

  const columns = useMemo(
    () => [
      {
        Header: "Name",
        accessor: "name",
      },
      {
        Header: "Type",
        accessor: "development_type",
      },
      {
        Header: "Location",
        accessor: "location",
      },
      {
        Header: "",
        accessor: "id",
        Cell: RowDropdown,
        disableSortBy: true,
      },
    ],
    []
  );

  return (
    <React.Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Edit Developments | Instahomes</title>
        <meta
          name="description"
          content="Edit developments | Instahomes"
        ></meta>
      </Helmet>
      <Base
        headerName="Developments"
        HeaderElements={<HeaderElements />}
        Body={
          loading ? (
            <Loading color="#3F526A" />
          ) : (
            <React.Fragment>
              <Datatable data={data} columns={columns} />
            </React.Fragment>
          )
        }
      />
    </React.Fragment>
  );
});

export default DevelopmentUpload;
