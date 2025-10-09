import React, { useState } from 'react';

const DynamicTabs = () => {
  const [tabs, setTabs] = useState([
    { id: 1, title: 'Tab 1', content: 'Content for Tab 1' },
    { id: 2, title: 'Tab 2', content: 'Content for Tab 2' }
  ]);
  const [activeTabId, setActiveTabId] = useState(1);
  const [tabCount, setTabCount] = useState(2); // For naming new tabs

  const handleAddTab = () => {
    const newId = Date.now();
    const newTab = {
      id: newId,
      title: `Tab ${tabCount + 1}`,
      content: `Content for Tab ${tabCount + 1}`
    };
    setTabs([...tabs, newTab]);
    setActiveTabId(newId);
    setTabCount(tabCount + 1);
  };

  const handleRemoveTab = (id) => {
    if (tabs.length === 1) return; // At least one tab must remain
    const updatedTabs = tabs.filter(tab => tab.id !== id);
    setTabs(updatedTabs);

    if (id === activeTabId) {
      setActiveTabId(updatedTabs[0].id);
    }
  };

  const handleTabClick = (id) => {
    setActiveTabId(id);
  };

  return (
    <div style={{ fontFamily: 'Arial' }}>
      <button onClick={handleAddTab} style={{ marginBottom: '10px' }}>➕ Add Tab</button>
      <div style={{ display: 'flex', gap: '8px', marginBottom: '10px' }}>
        {tabs.map(tab => (
          <div
            key={tab.id}
            style={{
              padding: '6px 12px',
              borderRadius: '6px',
              cursor: 'pointer',
              backgroundColor: tab.id === activeTabId ? '#4caf50' : '#ccc',
              color: tab.id === activeTabId ? '#fff' : '#000',
              display: 'flex',
              alignItems: 'center'
            }}
          >
            <span onClick={() => handleTabClick(tab.id)}>{tab.title}</span>
            {tabs.length > 1 && (
              <button onClick={() => handleRemoveTab(tab.id)} style={{
                marginLeft: '8px',
                background: 'transparent',
                border: 'none',
                color: 'red',
                cursor: 'pointer'
              }}>
                ❌
              </button>
            )}
          </div>
        ))}
      </div>
      <div style={{ border: '1px solid #ccc', padding: '16px', borderRadius: '6px' }}>
        {tabs.find(tab => tab.id === activeTabId)?.content}
      </div>
    </div>
  );
};

export default DynamicTabs;