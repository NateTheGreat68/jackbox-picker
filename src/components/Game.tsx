  
import React from 'react';
import Types from '../types';

import Image from 'react-bootstrap/Image'
import Emoji from './Emoji';

const Game: React.FC<Types.GamesAppInterface> = (
{ title,
  pack,
  min_players,
  max_players,
  extended_timers,
  img,
  family_mode,
  audience,
  drawing,
  game_length,
  show_images,
  steam_id }
) => {

  const BooleanEmoji = (checkValue: boolean) => {
    return checkValue
      ? <Emoji label="yes" symbol="✅" />
      : <Emoji label="no" symbol="❌" />
  }

  const hideMobileCell = "d-none d-md-table-cell";
  const steamLink = "steam://run/" + steam_id;

  return (
    <tr>
      <td>
        <a href={steamLink}>
          {show_images
            ? <Image src={require("../images/" + img)} fluid alt={title} />
            : title
          }
        </a>
      </td>
      <td>
        {pack === 22
          ? 'n/a'
          : pack}
      </td>
      <td>
        {min_players}-{max_players}
      </td>
      <td>
        {game_length}
      </td>
      <td>
        {BooleanEmoji(extended_timers)}
      </td>
      <td className={hideMobileCell}>
        {BooleanEmoji(family_mode)}
      </td>
      <td className={hideMobileCell}>
        {BooleanEmoji(audience)}
      </td>
      <td className="d-none d-md-table-cell">
        {drawing}
      </td>
    </tr>
  );
};

export default Game;
