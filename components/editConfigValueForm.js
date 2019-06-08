import { useContext, useState } from "react";
import { ConfigContext } from "../contexts/configContext";
import typeMatcher from "../utils/typeMatcher";

export default function EditConfigValueForm() {
  const { config, setConfigValue } = useContext(ConfigContext);

  const [selectedKey, setSelectedKey] = useState("");
  const [updatedValue, setUpdatedValue] = useState("");

  const configKeys = Object.keys(config);

  function onSubmitSave(e) {
    e.preventDefault();
    setConfigValue(selectedKey, updatedValue);
    setSelectedKey("");
    setUpdatedValue("");
  }

  function onChangeSelectedKey(e) {
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setSelectedKey(value);
    setUpdatedValue(config[value]);
  }

  return (
    <form onSubmit={onSubmitSave}>
      <select value={selectedKey} onChange={onChangeSelectedKey}>
        <option value="" />

        {configKeys.map(key => (
          <option value={key} key={key}>
            {key}
          </option>
        ))}
      </select>

      {selectedKey ? (
        <section>
          <EditConfigValueInput
            value={updatedValue}
            onChange={e =>
              setUpdatedValue(
                e.target.type === "checkbox" ? e.target.checked : e.target.value
              )
            }
          />
          <button>Save</button>
        </section>
      ) : null}
    </form>
  );
}

function EditConfigValueInput({ value, onChange }) {
  return (
    <input
      type={typeMatcher(value, {
        string: () => "text",
        number: () => "text",
        boolean: () => "checkbox"
      })}
      value={value}
      onChange={onChange}
    />
  );
}
