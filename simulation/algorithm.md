# Meta Twitch

## Overview

Games are played within seasons, with each season lasting approximately one
month.

Throughout each season, streamers can be bought and sold at a market price.

At the beginning of each season, users starts with a given budget. They can
choose to spend this however they want; although, top streamers will be beyond
their budgets and one cannot purchase duplicate streamers.

Throughout the competition, each user must choose five of their streamers to
form a team to compete in the league's competition. A wager proportional to
the team's total market value is taken and matches are paired by the size of
this wager. The winner of the match will collect the entire pot and will gain
ELO points for having won. The winner of the match is the person with the
greatest area under the viewer count vs time graph.

At the end of the season, the user with the most accrued ELO points is
declared the winner.

Users can gain money by playing the market, and by winning big games. Having
extra money will enable a user to invest in a better team; however, it has no
direct bearing on the final result.

## Market pricing algorithm

To facilitate a trading mechanism for the game, several considerations had
to be made. First and foremost, was how to set the market price for a Twitch
channel. Ideally, this would avoid common pitfalls of market behaviour.

The decision was made to make the price self-correct when a trader was
overhyped, so that the system would be simpler to accommodate for inexperienced
traders. This was achieved by calculating a base price based on the amount of
points a streamer would be expected to gain in a week. This was considered as
a baseline price for the currency, and the actual price would be shifted closer
to it, by taking dy/dt = (B - y) * a / 2, where y is the market price for a
streamer, and A and B are constants. This forms a differential equation, and
solving for y would give exponential decay towards the value y=B,
provided a > 0.

Whenever a streamer is purchased, their value is multiplied by 1.02. In theory,
this could lead to exponential growth; however, it most likely won't due to
people not wanting to spend an exorbitant amount on a player. Furthermore, the
exponential decay discussed earlier may cancel out the exponential growth.
