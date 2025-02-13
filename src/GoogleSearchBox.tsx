import * as React from 'react';
import { Button, Text, Field, SearchBox } from '@fluentui/react-components';
import type {
  ButtonProps,
  InputOnChangeData,
  SearchBoxChangeEvent,
  SearchBoxProps,
} from '@fluentui/react-components';
import { SearchRegular } from '@fluentui/react-icons';

const GoogleSearch: React.FC = (props: SearchBoxProps) => {
  const [query, setQuery] = React.useState('');

  const handleSearch = () => {
    window.open(
      `https://www.google.com/search?q=${encodeURIComponent(query)}`,
      '_blank'
    );
  };
  const MicButton: React.FC<ButtonProps> = (props) => {
    return (
      <Button
        {...props}
        appearance="transparent"
        icon={<SearchRegular />}
        onClick={handleSearch}
      />
    );
  };

  const onChange: (
    ev: SearchBoxChangeEvent,
    data: InputOnChangeData
  ) => void = (_, data) => {
    if (data.value.length <= 20) {
      setQuery(data.value);
    }
  };
  return (
    <>
      <div style={{ textAlign: 'center', padding: '10px' }}>
        {/* <TextField
                placeholder="Search Google..."
                value={query}
                onChange={(_, newValue) => setQuery(newValue || "")}
                style={{ width: "300px" }}
            />
            <PrimaryButton text="Search" onClick={handleSearch} style={{ marginLeft: "10px" }} />
             */}
      </div>
      <Field label="">
        <SearchBox
          {...props}
          size="large"
          placeholder="Search Google or type a url"
          value={query}
          onChange={onChange}
          contentBefore={<Text size={400}>Google:</Text>}
          contentAfter={<MicButton aria-label="Search" />}
        />
      </Field>
    </>
  );
};

export default GoogleSearch;

// const argTypes: ArgTypes = {
//   // Add these native props to the props table and controls pane
//   placeholder: {
//     description:
//       "Placeholder text for the SearchBox. If using this instead of a label (which is " +
//       "not recommended), be sure to provide an `aria-label` for screen reader users.",
//     type: { name: "string", required: false }, // for inferring control type
//     table: { type: { summary: "string" } }, // for showing type in prop table
//   },
//   disabled: {
//     description: "Whether the SearchBox is disabled",
//     type: { name: "boolean", required: false },
//     table: { type: { summary: "boolean" } },
//   },
//   // Hide these from the props table and controls pane
//   children: { table: { disable: true } },
//   as: { table: { disable: true } },
// };
