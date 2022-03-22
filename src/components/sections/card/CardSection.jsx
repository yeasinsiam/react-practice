import { connect } from "react-redux";
import {
  addCardItem,
  removeCardItem,
  setCardItemValue,
  setCardMetaData,
} from "../../../redux/";
import TableDeleteIcon from "../../table-delete-icon/TableDeleteIcon";
import CardMetaFields from "./card-meta-fields/CardMetaFields";
import "./CardSection.css";
const CardSection = ({
  card,
  // funcitons
  addCardItem,
  removeCardItem,
  setCardItemValue,
  setCardMetaData,
}) => {
  return (
    <section className="card-section ">
      <div className="container">
        <table>
          <thead>
            <tr>
              <th align="left" style={{ width: "55%" }}>
                ITEM
              </th>
              <th align="left" style={{ width: "15%" }}>
                QTY
              </th>
              <th align="left" style={{ width: "20%" }}>
                RATE
              </th>
              <th align="center">Total</th>
            </tr>
          </thead>
          <tbody>
            {card.cardItems.map((item) => (
              <tr key={item.id}>
                <td>
                  <input
                    className="form-input"
                    type="text"
                    placeholder="Item Name"
                    name="name"
                    value={item.name}
                    onChange={(event) =>
                      setCardItemValue(
                        { name: event.target.name, value: event.target.value },
                        item.id
                      )
                    }
                  />
                </td>
                <td>
                  <input
                    className="form-input"
                    type="number"
                    min="0"
                    placeholder="Qty"
                    name="qty"
                    value={item.qty}
                    onChange={(event) =>
                      setCardItemValue(
                        { name: event.target.name, value: event.target.value },
                        item.id
                      )
                    }
                  />
                </td>
                <td>
                  <input
                    className="form-input"
                    type="number"
                    min="0"
                    placeholder="Rate"
                    name="rate"
                    value={item.rate}
                    onChange={(event) =>
                      setCardItemValue(
                        { name: event.target.name, value: event.target.value },
                        item.id
                      )
                    }
                  />
                </td>
                <td>${item.total.toFixed(2)}</td>
                {/* index > 0 */}
                <td
                  style={{
                    visibility:
                      card.cardItems.length !== 1 ? "visible" : "hidden",
                  }}
                >
                  <TableDeleteIcon onClick={() => removeCardItem(item.id)} />
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td className="tfoot-green-text" onClick={addCardItem}>
                Add Item
              </td>
              <td colSpan={2}>Sub Total</td>
              <td>${card.subTotal.toFixed(2)}</td>
            </tr>
            <CardMetaFields
              title="Add Discount"
              name="discount"
              value={card.discount}
              setCardMetaData={setCardMetaData}
            />
            <CardMetaFields
              title=" Add Tax"
              name="tax"
              value={card.tax}
              setCardMetaData={setCardMetaData}
            />
            <tr className="total">
              <td></td>
              <td className="total-br">Total</td>
              <td colSpan={2} align="right" className="total-br">
                ${card.total.toFixed(2)}
              </td>
              <td className="total-br"></td>
            </tr>
          </tfoot>
        </table>
      </div>
    </section>
  );
};

const mapStateToProps = (state) => {
  return {
    card: state.card,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addCardItem: () => dispatch(addCardItem()),
    setCardItemValue: (target, cardItemID) =>
      dispatch(setCardItemValue(target, cardItemID)),
    removeCardItem: (cardItemID) => dispatch(removeCardItem(cardItemID)),
    setCardMetaData: (name, value) => dispatch(setCardMetaData(name, value)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CardSection);
