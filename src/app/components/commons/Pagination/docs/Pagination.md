# GRID :star:

## When to use

You can use the component in two different way

- First is when you have the entire data
- When you must do a api call

## Application Pagination.

```js
import { Pagination, PaginationComponent } from 'sarenza-uikit';
```

#### Example

```js
<Pagination
  data={[
    {
      id: 1,
      name: 'CatalogSellingPrice',
      displayName: 'PVC',
      entityType: 0,
      canBeUpdated: true
    },
    {
      id: 4,
      name: 'WeightAverageBuyingPrice',
      displayName: 'PMP',
      entityType: 0,
      canBeUpdated: false
    },
    {
      id: 6,
      name: 'SellingPrice',
      displayName: 'PC',
      entityType: 0,
      canBeUpdated: true
    },
    {
      id: 7,
      name: 'VariantId',
      displayName: 'VID',
      entityType: 1,
      canBeUpdated: false
    },
    {
      id: 8,
      name: 'ProductColorId',
      displayName: 'PCID',
      entityType: 1,
      canBeUpdated: false
    },
    {
      id: 9,
      name: 'IsReturnable',
      displayName: 'Consigné',
      entityType: 2,
      canBeUpdated: false
    },
    {
      id: 10,
      name: 'IsUntouchable',
      displayName: 'Intouchable',
      entityType: 2,
      canBeUpdated: false
    },
    {
      id: 11,
      name: 'OnlineSince',
      displayName: 'En ligne depuis (en jours)',
      entityType: 1,
      canBeUpdated: false
    },
    {
      id: 12,
      name: 'PreviousPVCPrice',
      displayName: 'Ancien PVC',
      entityType: 0,
      canBeUpdated: false
    },
    {
      id: 13,
      name: 'PreviousPCPrice',
      displayName: 'Ancien PC',
      entityType: 0,
      canBeUpdated: false
    },
    {
      id: 14,
      name: 'PreviousPMPPrice',
      displayName: 'Ancien PMP',
      entityType: 0,
      canBeUpdated: false
    },
    {
      id: 15,
      name: 'PreviousPFPrice',
      displayName: 'Ancien PF',
      entityType: 0,
      canBeUpdated: false
    },
    {
      id: 16,
      name: 'Promo',
      displayName: 'Promo',
      entityType: 4,
      canBeUpdated: false
    },
    {
      id: 17,
      name: 'VP',
      displayName: 'VP',
      entityType: 4,
      canBeUpdated: false
    }
  ]}
  renderContent={(data: DataType[]) => {
    if (data) {
      return (
        <table>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>displayName</th>
          </tr>

          {data.map((item: DataType) => {
            return (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.displayName}</td>
              </tr>
            );
          })}
        </table>
      );
    }

    return <div>Loading...</div>;
  }}
  renderFooter={(data: DataType[], param) => {
    return (
      data && (
        <PaginationComponent
          data={data.map((item: DataType) => ({ label: item.name, value: item.id }))}
          params={param}
        />
      )
    );
  }}
/>
```

#### The render:

<!-- STORY -->
