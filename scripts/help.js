const pages = {
  cashRng: `
        <h3>Cash's RNG</h3>
        <ul id="ulsss">
          <li><code>/roll</code> - Initiates a roll to generate a random title based on predefined rarity probabilities.</li>
          <li><code>/leaderboard (scope) [limit]</code> - Displays the top users based on their rarest rolls and total number of rolls.</li>
          <li><code>/titles</code> - Shows a list of all possible titles obtainable from rolling, including their rarity and chances.</li>
          <li><code>/display-title</code> - Change the title that displays on your profile.</li>
          <li><code>/collection [user]</code> - View your own or someone else's title collection.</li>
          <li><code>/favourite-title</code> - Favourite a title you own.</li>
          <li><code>/unfavourite-title</code> - Unfavourite a title you have favourited.</li>
        </ul>
      `,
  vanityrole: `
        <h3>Vanity Roles</h3>
        <ul>
          <li><code>;vanity enable</code> - Activates the vanity role system, allowing Cash to assign roles based on a member's custom status.</li>
          <li><code>;vanity disable</code> - Deactivates the vanity role system, stopping Cash from assigning or removing roles based on custom status.</li>
          <li><code>;vanity set-keyword (keyword)</code> - Sets the keyword that must appear in a member's custom status for Cash to assign the designated role.</li>
          <li><code>;vanity set-role (role_id)</code> - Assigns a specified role to a member when the set keyword is found in their custom status.</li>
          <li><code>;vanity set-channel (channel_id)</code> - Designates the channel where Cash will send notifications whenever a member gains or loses a vanity role.</li>
        </ul>
      `,
  actionlimit: `
        <h3>Action Limiting</h3>
        <ul>
          <li><code>/action-limit enable</code> - Activates the action limit system, enforcing restrictions for non-whitelisted users.</li>
          <li><code>/action-limit disable</code> - Deactivates the action limit system, removing all restrictions.</li>
          <li><code>/action-limit list-whitelisted-roles</code> - Displays all currently whitelisted roles.</li>
          <li><code>/action-limit set-limit (number)</code> - Sets the maximum number of kicks or bans a non-whitelisted user can perform before being banned. Options: zero, one, two, three, four, five, six.</li>
          <li><code>/action-limit add-role-whitelist (role)</code> - Adds a role to the whitelist, exempting its members from action limits.</li>
          <li><code>/action-limit remove-role-whitelist (role)</code> - Removes a role from the whitelist, making its members subject to action limits.</li>
          <li><code>/action-limit set-action-log-channel (channel)</code> - Sets a channel for logging action-limit related events.</li>
          <li><code>/action-limit remove-action-log-channel (true/false)</code> - Removes the channel for logging action-limit related events.</li>
        </ul>
      `,
  moderation: `
        <h3>Moderation Commands</h3>
        <ul>
          <li><code>/nuke</code> - Clone a channel and delete the original, effectively clearing its content while retaining its settings. Useful for resetting channels.</li>
          <li><code>/ban (user) [reason]</code> - Permanently ban a member from the server. You can optionally provide a reason for the ban.</li>
          <li><code>/kick (user) [reason]</code> - Remove a member from the server temporarily without banning them. You can optionally provide a reason.</li>
          <li><code>/editrole-name (role) (new_name)</code> - Change the name of an existing role in the server.</li>
          <li><code>/editrole-permissions (role) (add/remove permission)</code> - Modify the permissions of an existing role. You can add or remove specific permissions as needed.</li>
          <li><code>/role (add/remove) (role> (user)</code> - Add or remove a role from a user. Specify whether to add or remove a role, the role itself, and the target user.</li>
        </ul>
      `,
};

let currentPage = "";

function showPage(pageId) {
  currentPage = pageId;

  const content = document.getElementById("pageContent");
  content.innerHTML = pages[pageId] || "<p>Page not found.</p>";

  const buttons = document.querySelectorAll(".nav-buttons button");
  buttons.forEach((btn) => {
    btn.classList.remove("active-page");
  });

  const activeButton = document.getElementById(pageId);
  if (activeButton) {
    activeButton.classList.add("active-page");
  }
}

showPage("cashRng");
