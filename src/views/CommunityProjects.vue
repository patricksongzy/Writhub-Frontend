<template lang="pug">
    div(
        :style="{ height: this.height + 'px', width: this.width + 'px'}"
        v-resize="getDimensions"
    )
        v-row.set-vh(
        )
            v-col.set-vh(
                lg="2"
                cols="1"
            )
            v-col.set-vh(
                lg="8"
                cols="10"
            )
                .initial-height
                    span.title Community Projects
                    .display-cards
                        ProjectCard.project-cards(
                            v-for="(item, index) in items"
                            :key="index"
                            :id="item.key"
                            :name="item.title"
                            :description="item.description"
                            :text="item.text"
                            :coverArt="item.coverArt"
                        )
                    .bottom
</template>

<script>
    import ProjectCard from "@/components/ProjectCard.vue"
    import firebase from "firebase/app";
    require('firebase/database')
    
    export default {
        name: "CommunityProjects",
        data: () => {
            return {
                height: window.innerHeight,
                width: window.innerWidth,
                items: []
            }
        },
        components: {
            ProjectCard
        },
        methods: {
            getDimensions: function() {
                this.height = window.innerHeight
                this.width = window.innerWidth
            },
            loadPage: function(v) {
                firebase.database().ref('stories').orderByChild("date").on("value", function(snap) {
                    v.items = [];
                    snap.forEach(function(data) {
                        let text = ""
                        console.log(data.val()?.text)
                        if (data.val()?.text) {
                            text = Object.values(data.val().text)[0].text
                        }
                        v.items.push({ key: data.key, title: data.val().title, description: data.val().description, text: text, coverArt: "CoverArt.jpg"});
                        // v.items.push({ key: data.key, title: data.val().title, description: data.val().description, owner: data.val().owner, text: text, coverArt: "CoverArt.jpg"});
                    });
                });
            },
        },
        beforeMount() {
          this.loadPage(this);
        },
    }
</script>

<style scoped>
    .initial-height {
        position: relative;
        top: 30%;
    }

    .title {
        display: block;
        font-family: Roboto;
        font-style: normal;
        font-weight: 500;
        font-size: 48px;
        line-height: 26px;
        color: #091133;
        text-align: left;
    }
    
    .display-cards {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
    }

    .project-cards {
        width: calc((100% - 82px) / 3);
        margin: 56px 10px 0px 10px;
    }

    .set-vh {
        height: 100%;
    }
    .set-50 {
        height: 50%;
    }
</style>
