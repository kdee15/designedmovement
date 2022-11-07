import ReactMarkdown from "react-markdown";
import SubcomponentPreivewCard from "../../organisms/subcomponentPreivewCard/SubcomponentPreivewCard";
import classes from "./ComponentServiceList.module.scss";

function ComponentServiceList({ componentData }) {
  const { title, serviceList } = componentData;
  return (
    <div className={`${classes.oServicesListBlock} container`}>
      <div className={`${classes.oRow} row`}>
        <div>{title}</div>
      </div>
      <div className={`${classes.oRow} row`}>
        {serviceList
          .sort(function (a, b) {
            return new Date(a.fields.order) - new Date(b.fields.order);
          })
          .map((serviceItem) => (
            <SubcomponentPreivewCard
              serviceItem={serviceItem}
              key={serviceItem.sys.id}
            />
          ))}
      </div>
    </div>
  );
}

export default ComponentServiceList;
