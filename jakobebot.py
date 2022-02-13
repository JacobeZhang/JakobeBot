import discord
import json
import random
import mytoken

client = discord.Client(activity=discord.Game(name='with your mom'))

prefix = "jakobe"

with open("quizdb.json", encoding="utf8") as file:
    y = json.load(file)

with open("users.json", encoding="utf8") as file:
    z = json.load(file)

@client.event
async def on_ready():
    print('We have logged in as {0.user}'.format(client))


@client.event
async def on_message(message):
    if message.author == client.user:
        return

    if message.content.startswith(prefix + ' ping'):
        await message.channel.send(':face_with_symbols_over_mouth:')

    if message.content.startswith('cope'):
        await message.channel.send('cope')

    if message.content.startswith(prefix + ' praise'):
        if str(message.author.id) in z.keys():
            z[str(message.author.id)] += 1
        else:
            z[str(message.author.id)] = 1
        with open("users.json", "w") as outfile:
            json.dump(z, outfile)
        await message.channel.send("thank you, I am indeed a great bot" + "\n" + "your jakobe-credit-score:tm: is " + str(z[str(message.author.id)]))

    if message.content.startswith(prefix + ' quiz'):
        channel = message.channel
        quiz = y[random.randrange(1,100)]
        await message.channel.send(quiz["text"])
        msg = await client.wait_for('message')
        await channel.send(quiz["answer"])

client.run(mytoken.token)
